<template>
    <div class="loginBase">
        <div class="loginForm">
            <input v-model="email" class="loginField" placeholder="Email" /> <br>
            <input v-model="password" class="loginField" placeholder="Password" /> <br>
            <input @click="getFormValues()" type="submit" />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()
const email = ref('')
const password = ref('')
function getFormValues(){
  storeUser.postLogin(email.value, password.value)
}
</script>

<style>
.loginField{
    width: 300px;
    margin-bottom: 5px;
}
</style>