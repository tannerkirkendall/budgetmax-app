<template>
    <div class="loginorcreate">
        <div class="loginOrCreateSel">
            <button @click="showHide(2)" class="option">Login</button>
            <button @click="showHide(1)" class="option">Create Account</button>

        </div>

        <div class="forms">
            <div v-show="showLogin">
                <Login></Login>
            </div>
            <div v-show="showAccount">
                <CreateAccount></CreateAccount>
            </div>
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
    width: max-content;
    height: 55px;
}

.loginorcreate{
    display: flex;
    flex-direction: column;
    background-color: aqua;

}
.loginOrCreateSel{
    display: flex;
    justify-content: center;
    background-color: red;
    

}

.forms{
    display: flex;
    justify-content: center;
    background-color: green;

}
</style>