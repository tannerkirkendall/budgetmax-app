<template>
<table class="container">
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
/* Basic global styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

h1 {
    text-align: center;
    margin: 20px 0;
}

/* Container to center and add some padding */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Table styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
}

td {
    background-color: #fff;
    font-size: 14px;
}

/* Row hover effect */
tr:hover {
    background-color: #f1f1f1;
}

/* Make the table more readable on small screens */
@media (max-width: 768px) {
    table {
        border: 0;
        font-size: 14px;
    }
    
    thead {
        display: none; /* Hide table headers on mobile */
    }

    tr {
        display: block;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        background-color: #fff;
        padding: 10px;
    }

    td {
        display: block;
        text-align: left;
        padding: 1px 10px;
        border: none;
        position: relative;
    }

    td:before {
        content: attr(data-label);
        font-weight: bold;
        position: absolute;
        left: 10px;
        top: 10px;
    }

    td:last-child {
        border-bottom: 1px solid #ddd;
    }
}

/* Responsive column label styles for mobile */
@media (max-width: 600px) {
    td:before {
        left: 0;
        top: 0;
    }
}

</style>