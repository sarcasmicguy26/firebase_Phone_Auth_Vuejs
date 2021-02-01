<template>
    <div>
        <h1 style="color:white;">Dashboard</h1>
        <div class="success">
            <div style="background-color:black;border-top-left-radius:10px;border-top-right-radius:10px;">
                <label>Successfully Logged In:</label>
            </div>
            <div>
                <label>{{number}}</label>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    name:"dashboard",  
    data()
    {
        return{
            number:null,
        }
    },
    created()
    {
        let user = firebase.auth().currentUser

        this.number = user.phoneNumber
    },
}
</script>

<style scoped>
.success{
    background-color: rgb(35, 35, 36);
    width: 40%;
    margin: auto;
    font-family: monospace;
    font-size: 20px;
    border-radius: 10px;
}
</style>