
<template>
  <div class="home">
    <h1>Home</h1>
    
    <!-- {{ storeUser.getCategoriesForDropdown }} -->

    <br>
    <br>

    <NewTransaction></NewTransaction>
    <TransactionsGrid></TransactionsGrid>

    <!-- {{ storeUser.getAllTransactions }} -->


  </div>
</template>

<script setup>
import NewTransaction from '@/components/NewTransaction.vue';
import TransactionsGrid from '@/components/TransactionsGrid.vue';
import { onMounted, onUpdated } from 'vue'
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()

onMounted(() => {
  console.log(`Home the component is now mounted.`)
  storeUser.checkLoggedIn()
  storeUser.getCategories()
  storeUser.getTransactions();
})

onUpdated(() => {
  // console.log(`home the component is now onUpdated.`)
  // storeUser.checkLoggedIn()
})




</script>

