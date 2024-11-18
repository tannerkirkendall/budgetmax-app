
<template>
  <div class="app">
    <nav v-show="storeUser.isLoggedIn">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink>
      <span @click="storeUser.logout()" v-show="storeUser.isLoggedIn"> | Logout</span> 
    </nav>
    <div v-if="storeUser.isLoggedIn">
      <RouterView />
    </div>
    <div class="loginOrRegister"  v-if="!storeUser.isLoggedIn">

      <!-- <LoginOrCreateAccount></LoginOrCreateAccount> -->
      <LoginOrRegister></LoginOrRegister>
    </div>
    
  </div>
  </template>

<script setup>
import LoginOrCreateAccount from '@/components/LoginOrCreateAccount.vue';
import LoginOrRegister from '@/components/LoginOrRegister.vue';
import {useUserStore} from '@/stores/userStore'
import './assets/base.css'
const storeUser = useUserStore()

import { onMounted, onUpdated } from 'vue'
onMounted(() => {
  storeUser.checkLoggedIn()
  console.log(import.meta.env.VITE_APP_API_PATH)
})
</script>

<style>
.loginOrRegister{
  font-family: Arial, sans-serif;
    background-color: #f4f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>