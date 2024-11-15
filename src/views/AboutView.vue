
<template>
  <div class="about">
    <h1>About</h1>
    <div class="count">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
      <button @click="storeCounter.getData(3)">Get</button>
      <button @click="storeCounter.saveData">Save</button>
    </div>
    <hr>
    <div>
      The counter is: {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <input v-model="storeCounter.count" type="number">

    <div>
      Data: {{ storeCounter.prices }}
    </div>
    <hr>

 
 
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useCounterStore} from '@/stores/counter'
import CreateAccount from '@/components/CreateAccount.vue';
import Login from '@/components/Login.vue';
import LoginOrCreateAccount from '@/components/LoginOrCreateAccount.vue';
import { onMounted, onUpdated } from 'vue'

import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()

onMounted(() => {
  console.log(`about the component is now mounted.`)
  storeUser.checkLoggedIn()
})

onUpdated(() => {
  console.log(`about the component is now onUpdated.`)
  storeUser.checkLoggedIn()
})

const storeCounter = useCounterStore()


</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>