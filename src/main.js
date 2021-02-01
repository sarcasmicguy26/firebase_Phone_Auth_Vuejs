import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from "vue-router";
import firebase from "firebase";
import 'firebase/auth'

import Login from "./components/login";
import Dashboard from "./components/dashboard";

Vue.use(VueRouter)

const routes=[
  {
    path:"/",
    name:"login",
    component:Login,

  },
  {
    path:"/dashboard",
    name:"dashboard",
    component:Dashboard,
    meta:{requiresAuth:true}
  }
]



var firebaseConfig = {
  apiKey: "AIzaSyAJX0qj-74xTYhGuFETekgbvPQzFfc2ZpA",
  authDomain: "authentication-62720.firebaseapp.com",
  databaseURL: "https://authentication-62720-default-rtdb.firebaseio.com",
  projectId: "authentication-62720",
  storageBucket: "authentication-62720.appspot.com",
  messagingSenderId: "681092632258",
  appId: "1:681092632258:web:b75177d9111ae782e9b55b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{

  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if(requiresAuth && !isAuthenticated)
  {
    next('/')
  }
  else
  {
    next()
  }
  if(!requiresAuth && isAuthenticated)
  {
    next('/dashboard')
  }
  else
  {
    next()
  }
})

new Vue({
  router,  
  render: h => h(App),
}).$mount('#app')
