<template>
    <select v-model="storeUser.selectedBudget" @change="handleChange" id="options" name="options">
        <option v-for="user in storeUser.getAllBudgets.budgets" :key="user.budgetId" :value="user.budgetId"> {{ user.startDate }} - {{ user.endDate }}</option>
    </select>
    {{ storeUser.selectedBudget }}
</template>

<script setup>
    import {useUserStore} from '@/stores/userStore'
    const storeUser = useUserStore()

    function handleChange(){
        storeUser.getTransactions();
    }

</script>

<style>

</style>