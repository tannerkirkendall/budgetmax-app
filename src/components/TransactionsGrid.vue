<template>
    <div v-for="cats in storeUser.getAllTransactions">
        <div v-for="cat in cats">
            <div class="catHeader">
                <span class="catName">{{ cat.category }}</span>
                <span class="catBugLft">{{ formatPrice(cat.budgetRemaining) }}</span>
            </div>
            <div v-for="sub in cat.subCategoriesSummary" class="subCat">
                <div class="catName">{{ sub.subCategory }}:  {{ formatPrice(sub.budgetAmount) }}</div>
                <div class="">
                    <div class="catName">{{ formatPrice(sub.amountSpent) }}</div>
                    <div class="catName">{{ formatPrice(sub.budgetRemaining) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useUserStore} from '@/stores/userStore'
const storeUser = useUserStore()

function formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', '.')
        return "$"+val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
</script>

<style>

.catHeader{
  background-color: rgb(97, 96, 96);
  color: azure;
  border-style: solid;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: rgb(171, 171, 171);
  padding: 3px;
  font-size: 1.3em;
}
.catName{
   
  margin-left: 5px;
  margin-right: 5px;
}

.catBugLft {
  float: right;
  margin-right: 5px;
  text-align: right;
}

.subCat{
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  background-color: rgb(236, 236, 236);
  border-style: solid;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: rgb(219, 219, 219);
  padding: 5px;
  text-align: right;

}

</style>