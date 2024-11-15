//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from './App.vue'
import router from './router'

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyAOzCIwlHjTWVX3Eh1WaB8md4_3LNOuybY",
    authDomain: "budget-max.firebaseapp.com",
    projectId: "budget-max",
    storageBucket: "budget-max.firebasestorage.app",
    messagingSenderId: "541034617751",
    appId: "1:541034617751:web:52c47aab0fab7283a8c2d2",
    measurementId: "G-5VC897NYZ1"
  };
  

const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbapp);
app.use(createPinia())
app.use(router)

app.mount('#app')
