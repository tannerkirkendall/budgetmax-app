import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('users', () => {

const loginToken = ref('')
const isLoggedIn = computed(()=> {
    if (loginToken.value.length > 0) return true
    return false
  })

function logout(){
    console.log('delete')
    setCookie('token', "", -1)
    checkLoggedIn()
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkLoggedIn() {
    loginToken.value = "";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      let cookieKeyPair = c.split('=');
      if (cookieKeyPair[0].trim() === 'token'){
        loginToken.value = cookieKeyPair[1]
      }
    }
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

    return {postCreateNewAccount, postLogin, loginToken, checkLoggedIn, isLoggedIn, logout }

})