<template>
    <div class="login-container">
        <form @submit.prevent="getFormValues()" class="login-form">
            <h2>Budget Max</h2>

            <div v-if="!loginForm" class="input-group">
                <label for="fullname">Full Name</label>
                <input v-model="fullName" type="text" id="fullName" name="fullName" placeholder="Enter your Full Name" required>
            </div>

            <div class="input-group">
                <label for="username">E-Mail</label>
                <input v-model="email" type="text" id="username" name="username" placeholder="Enter your E-Mail" required>
            </div>

            <div class="input-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>

            <button v-show="!loginForm" type="submit" class="login-btn">Create Account</button>
            <button v-show="loginForm" type="submit" class="login-btn">Login</button>

            <p v-show="!loginForm" class="signup-link">Already have an account? <a @click="switchForm()" href="#">Sign in</a></p>
            <p v-show="loginForm" class="signup-link">Don't have an account? <a @click="switchForm()" href="#">Sign up</a></p>

        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {useUserStore} from '@/stores/userStore'
    const storeUser = useUserStore()
    const email = ref('')
    const fullName = ref('')
    const password = ref('')
    const loginForm = ref(true);
    function getFormValues(){
      if (loginForm.value){
        storeUser.postLogin(email.value, password.value)
      }
      else{
        storeUser.postCreateNewAccount(fullName.value, '', password.value, email.value)
      }
        
    }
    function switchForm(){
      if (loginForm.value){
        loginForm.value = false
      }
      else{
        loginForm.value = true;
      }
    }
    
</script>

<style>


  .login-container {    
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
 
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .input-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }

  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
  }

  input[type="text"]:focus, input[type="password"]:focus {
    border-color: #3498db;
  }
  
  .login-btn {
    width: 100%;
    padding: 12px;
    background-color: #3498db;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-btn:hover {
    background-color: #2980b9;
  }
  
  .signup-link {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #333;
  }
  
  .signup-link a {
    color: #3498db;
    text-decoration: none;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
</style>