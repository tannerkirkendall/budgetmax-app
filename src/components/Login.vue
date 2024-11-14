<template>
    <div class="loginBase">
        <div class="loginForm">
            <input v-model="email" placeholder="Email" /> <br>
            <input v-model="password" placeholder="Password" /> <br>
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