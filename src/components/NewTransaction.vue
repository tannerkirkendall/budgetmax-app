<template>
    <div class="form-container">
        <h2>Add New Transaction</h2>
        <form @submit.prevent="getFormValues()" id="transactionForm">
            <div class="form-group">
                <label for="accountName">Bank Account Name</label>
                <input v-model="bankAccountName" type="text" id="accountName" name="accountName" placeholder="Enter account name" required>
            </div>
            <div class="form-group">
                <label for="date">Date</label>
                <input v-model="date" type="date" id="date" name="date" required>
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input v-model="amount" type="number" id="amount" name="amount" step="0.01" placeholder="Enter amount" required>
            </div>
            <div class="form-group">
                <label for="categoryId">Category ID</label>
                <!-- <input v-model="subCategoryId" type="number" id="categoryId" name="categoryId" placeholder="Enter category ID" required> -->
                <select  v-model="subCategoryId" id="options" name="options">
                    <option v-for="user in storeUser.getCategoriesForDropdown.categories" :key="user.subCategoryId" :value="user.subCategoryId"> {{ user.categoryName }} - {{ user.subCategoryName }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="transactionDescription" id="description" name="description" rows="4" placeholder="Enter description"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {useUserStore} from '@/stores/userStore'
    const storeUser = useUserStore()

    //bankAccountName, date, amount, subCategoryId, transactionDescription
    const bankAccountName = ref('');
    const date = ref('');
    const amount = ref();
    const subCategoryId = ref();
    const transactionDescription = ref('');

    function getFormValues(){
        storeUser.saveTransactions(bankAccountName.value, date.value, amount.value, subCategoryId.value, transactionDescription.value);
        bankAccountName.value = ''
        date.value = ''
        amount.value = ''
        subCategoryId.value = ''
        transactionDescription.value = ''
        storeUser.getTransactions();
    }
</script>

<style>
.form-container {
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.2);
}

textarea {
    resize: none;
}

button {
    width: 100%;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
}

/* Optional: style the label */
label {
    font-size: 18px;
    margin-right: 10px;
}


</style>