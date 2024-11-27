<template>
<table class="bank-table">
    <thead>
      <tr>
        <th>Bank Account Name</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Category ID</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody >

        <tr v-for="user in storeUser.getAllTransactions.transactions" :key="user.transactionId">
        <td>{{ user.bankAccount }}</td>
        <td>{{ user.transactionDate }}</td>
        <td>{{ user.amount }}</td>
        <td>{{ user.subCategoryId }}</td>
        <td>{{ user.transactionDescription }}</td>
      </tr>

    </tbody>
  </table>
</template>

<script setup>
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()
</script>

<style>

.bank-table {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.bank-table th,
.bank-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.bank-table th {
  background-color: #4CAF50;
  color: white;
}

.bank-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.bank-table tr:hover {
  background-color: #f1f1f1;
}

.bank-table td {
  color: #555;
}

</style>