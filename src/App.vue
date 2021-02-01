<template>
  <div id="app">        
    <navbar/>
    <div>      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'App',
  components: {
    navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(248, 248, 248);
  margin-top: 0px;
  height: 100%;  
  margin: auto;
}

</style>
