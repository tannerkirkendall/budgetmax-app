<template>
    <div class="loginorcreate">
        <div class="optionButtons">
            <button @click="showHide(2)" class="option">Login</button>
            <button @click="showHide(1)" class="option">Create Account</button>
        </div>
        <div v-show="showLogin" class="login">
            <Login></Login>
        </div>
        <div v-show="showAccount" class="create">
            <CreateAccount></CreateAccount>
        </div>

    </div>

</template>

<script setup>
import {ref} from 'vue'
import Login from './Login.vue'
import CreateAccount from './CreateAccount.vue'

const showLogin = ref(true);
const showAccount = ref(false);

function showHide(a){

    if (a === 1){
    showAccount.value = true
    showLogin.value = false
    } else{
        showAccount.value = false
        showLogin.value = true
    }
}

</script>

<style>
.option{
    background-color: aqua;
    width: 150px;
    text-align: center;
    border: 1px solid rgb(0, 48, 80);
    margin: 4px;
}
.loginorcreate{
    text-align: center;
}
.optionButtons{
    padding: 5px;
}
</style>