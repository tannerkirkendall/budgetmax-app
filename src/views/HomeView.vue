
<template>
  <div class="home">
    <h1>Home</h1>
    
    <!-- {{ storeUser.getCategoriesForDropdown }} -->

    <br>
    <br>

    <div class="transactions">
      <div class="new">
        <NewTransaction></NewTransaction>
      </div>
      <div class="new">
        <TransactionsGrid></TransactionsGrid>
      </div>
    </div>

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

<style>
.transactions{
  display: flex; /* Enable flexbox */
    flex-direction: column; /* Stack items vertically */
    gap: 20px; /* Space between stacked items */
    padding: 20px;
    max-width: 600px;
    margin: 0 auto; /* Center the container horizontally */
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

}
.new{
  background-color: rgb(214, 255, 236);
  padding: 20px;
  text-align: center;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;
}


</style>