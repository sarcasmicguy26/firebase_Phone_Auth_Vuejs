<template>
    <div>
        <div class="navbar-nav">
            <ul class="nav">
                <li><router-link class="router" to="/" name="login">Home</router-link></li>
                <!-- <li><router-link class="router" to="/register" name="register">Register</router-link></li> -->
                <li><router-link class="router" to="/dashboard" name="dashboard">Dashboard</router-link></li>
                <li v-show="loggedin" style="float:right; margin-right:0.5%; cursor:pointer;" @click="saySomething">Log out</li>
                <!-- <button class="btn btn-dark" style="float:right;">Log out</button> -->
            </ul>             
        </div>        
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:"navbar",
    mounted()
    {
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user)
            if(user)
            this.loggedin=true

            else
            this.loggedin=false
        })        
    },
    methods:{
        saySomething()
        {
            firebase.auth().signOut()
            .then((resp)=>{
                alert("LoggedOut",resp)
                this.$router.replace({name:"login"})
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    data()
    {
        return{
            loggedin:false,
        }
    },
}
</script>
<style scoped>
.navbar-nav{
 width: 100%;
 margin: 0px;
 background-color: rgb(35, 36, 37); 
}
ul.nav{
    display: inline;    
    margin: 0%;    
}
ul.nav >li{
    display: inline-block;
    padding: 0.5% 0.7%;
    margin: 0%;       
    float: left;
}
ul.nav >li:hover{    
    background-color: black;
}
.router{
    color: aliceblue;
    text-decoration: none;
}
</style>