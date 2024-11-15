
<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/about">About</RouterLink>
      <span @click="storeUser.logout()" v-show="storeUser.isLoggedIn"> | Logout</span> 
    </nav>
    <div v-if="storeUser.isLoggedIn">
      <RouterView />
    </div>
    <div v-if="!storeUser.isLoggedIn">
      <LoginOrCreateAccount></LoginOrCreateAccount>
    </div>

    
  </div>
  </template>

<script setup>
import LoginOrCreateAccount from '@/components/LoginOrCreateAccount.vue';
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()

import { onMounted, onUpdated } from 'vue'
onMounted(() => {
  console.log(`the component is now mounted.`)
  storeUser.checkLoggedIn()
})

onUpdated(() => {
  console.log(`the component is now onUpdated.`)
})




</script>

<style>
/* .app{
  text-align: center;
} */
</style>