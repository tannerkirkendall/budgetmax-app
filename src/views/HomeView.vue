
<template>
  <div class="home">
    <h1>Home</h1>
    
    {{ storeUser.getCategoriesForDropdown }}

  </div>
</template>

<script setup>

import { onMounted, onUpdated } from 'vue'
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()

onMounted(() => {
  console.log(`Home the component is now mounted.`)
  storeUser.checkLoggedIn()
  storeUser.getCategories()
})

onUpdated(() => {
  // console.log(`home the component is now onUpdated.`)
  // storeUser.checkLoggedIn()
})




</script>

