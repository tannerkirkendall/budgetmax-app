import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
// import { VueCookies } from 'vue-cookies'
import axios from 'axios'

export const useUserStore = defineStore('users', () => {

const loginToken = ref('sdf')


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function postCreateNewAccount(firstName, lastName, password, email){

    axios
    .post('https://localhost:44375/api/users/createnewaccount', {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
    })
    .then((r) => {
        console.log(r.data)
    })
}

function postLogin(email, password) {
    axios
    .post('https://localhost:44375/api/auth/login', {
        password: password,
        email: email
    })
    .then((r) => {
        loginToken.value = r.data
        setCookie('token', r.data, 5600)
    })
}

    return {postCreateNewAccount, postLogin, loginToken, setCookie}

})