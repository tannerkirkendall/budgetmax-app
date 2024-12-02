
<template>
  <div class="home">
    <div class="topSection">
      <h1>Home</h1>

    </div>
    <div class="transactions">
      <TransactionsGrid></TransactionsGrid>

    </div>




  </div>
</template>

<script setup>


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
/* .home{
  height: 90vh;
  overflow:scroll;
} */


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