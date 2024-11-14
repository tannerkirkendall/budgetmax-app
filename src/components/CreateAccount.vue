<template>
    <div class="createAccountBase">
        <div class="accountForm">
            <input v-model="firstName" placeholder="First Name" /> <br>
            <input v-model="lastName" placeholder="Last Name" /> <br>
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
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
function getFormValues(){
  console.log(firstName.value)
  console.log(lastName.value)
  console.log(email.value)
  console.log(password.value)
  storeUser.postCreateNewAccount(firstName.value, lastName.value, password.value, email.value)
}
</script>