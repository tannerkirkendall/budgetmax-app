
<template>
  <div class="app">
    <nav v-show="storeUser.isLoggedIn">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/transactions">New Transaction</RouterLink> |
      <RouterLink to="/budget">Budget</RouterLink> 
      <span @click="storeUser.logout()" v-show="storeUser.isLoggedIn"> | Logout</span> 
    </nav>
    <div class="router" v-if="storeUser.isLoggedIn">
      <RouterView />
    </div>
    <div class="loginOrRegister"  v-if="!storeUser.isLoggedIn">
      <LoginOrRegister></LoginOrRegister>
    </div>
    
  </div>
  </template>

<script setup>
import LoginOrRegister from '@/components/LoginOrRegister.vue';
import {useUserStore} from '@/stores/userStore'
import './assets/base.css'
const storeUser = useUserStore()

import { onMounted, onUpdated } from 'vue'
onMounted(() => {
  storeUser.checkLoggedIn()
  console.log(import.meta.env.VITE_APP_API_PATH)
  storeUser.init();
})
</script>

<style>
.app{
  height: 100vh;
  overflow: hidden;
  background-color: rgb(234, 220, 245);
}
.loginOrRegister{
    font-family: Arial, sans-serif;
    background-image: url("https://images.unsplash.com/photo-1725455510558-3bf31a46e13b?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-color: #f4f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* .router{
  display: flex;
  justify-content: center;

} */
</style>