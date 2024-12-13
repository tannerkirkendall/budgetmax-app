
<template>
  <div class="home">
    <div class="topSection">
      <h1>Home</h1>
      <BudgetSelector></BudgetSelector>
    </div>
    <div class="transactions">
      <TransactionsGrid></TransactionsGrid>

    </div>
    
  </div>
</template>

<script setup>


import TransactionsGrid from '@/components/TransactionsGrid.vue';
import BudgetSelector from '@/components/BudgetSelector.vue';
import { onMounted, onUpdated } from 'vue'
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()

onMounted(() => {
  console.log(`Home the component is now mounted.`)
  var loggedin = storeUser.checkLoggedIn();
  console.log("loggedin", loggedin);
  
})

onUpdated(() => {
  // console.log(`home the component is now onUpdated.`)
  // storeUser.checkLoggedIn()
})




</script>

<style>
.topSection{
  background-color: aquamarine;
  height: 20vh;
  /* overflow: scroll; */
}
.transactions{
  background-color: salmon;
  height: 78vh;
  overflow: scroll;
  
}

::-webkit-scrollbar {
    display: none;
}


</style>