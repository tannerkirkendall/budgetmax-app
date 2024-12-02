import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('users', () => {

const apiBase = import.meta.env.VITE_APP_API_PATH
const loginToken = ref('')
const cats = ref({});
const transactions = ref({});
const newTrans = ref({cats:
    [
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Essentials", budget:600.00, left:200.00, subCats:[{name:"Gas", budget:250.00, spent:200.00, left:50.00}, {name:"Food", budget:350.00, spent:200.00, left:150.00}]},
    {name:"Non-Essentials", budget:75.00, left:-45.00, subCats:[{name:"Eat Out", budget:50.00, spent:100.00, left:-50.00}, {name:"Games", budget:25.00, spent:20.00, left:5.00}]}
    ]
});

const config = computed(() =>  {
    return {headers: { Authorization: 'Bearer ' + loginToken.value }}
});

const getCategoriesForDropdown = computed(() => {
    return cats.value;
})

const getAllTransactions = computed(() => {
    return transactions.value;
})

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
    .post(apiBase+'/api/users/createnewaccount', {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
    })
    .then((r) => {
        console.log(r.data)
        postLogin(email, password)
    })
}

function postLogin(email, password) {
    axios
    .post(apiBase+'/api/auth/login', {
        password: password,
        email: email
    })
    .then((r) => {
        loginToken.value = r.data
        setCookie('token', r.data, 5600)
    })
}

function getCategories(){
    axios
    .get(apiBase+'/api/Categories/all', config.value)
    .then((r) => {
        cats.value = r.data;
    })
}

function getTransactions(){
    axios
    .get(apiBase+'/api/Transactions', config.value)
    .then((r) => {
        transactions.value = r.data;
    })
}

function saveTransactions(bankAccountName, date, amount, subCategoryId, transactionDescription){
    const bodyParameters = {
        bankAccountName: bankAccountName,
        date: date,
        amount: amount,
        subCategoryId: subCategoryId,
        transactionDescription: transactionDescription
     };

    axios
    .post(apiBase+'/api/Transactions', bodyParameters, config.value)
    .then(console.log)
    .catch(console.log)
}

    return {postCreateNewAccount, postLogin, loginToken, checkLoggedIn, isLoggedIn, logout, getCategories, getCategoriesForDropdown, getTransactions, getAllTransactions, saveTransactions, newTrans }

})