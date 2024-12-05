<template>
    <select  v-model="subCategoryId" id="options" name="options">
        <option v-for="user in storeUser.getAllBudgets.budgets" :key="user.budgetId" :value="user.budgetId"> {{ user.startDate }} - {{ user.endDate }}</option>
    </select>
</template>

<script setup>
    import {useUserStore} from '@/stores/userStore'
    const storeUser = useUserStore()

</script>

<style>

</style>