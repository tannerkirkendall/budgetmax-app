
<template>
  <div class="about">
    <h1>About</h1>
    <div class="mainBudget">
      <div class="budgetSelctor">
        <span><<</span>
        <span>Nov 1 - Nov 30</span>
        <span>>></span>
      </div>
      <div class="budgetOverview">
        <div class="budgetCategories">Essentials</div>
        <div class="budgetCategories">Non-Essentials</div>
        <div class="budgetCategories">Bills</div>
      </div>
      <div class="budgetCategoryOverview">
        <div class="budgetCategory">Groceries</div>
        <div class="budgetCategory">Medical</div>
        <div class="budgetCategory">Piper</div>
      </div>

    </div>
 
 
  </div>
</template>

<script setup>

</script>

<style>
.about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 750px; */
}

.mainBudget{
  background-color: red;
  /* margin: 45px; */
  /* flex-basis: 25%; */
}

.budgetSelctor{
  background-color: cadetblue;

}

.budgetOverview{
  background-color:burlywood
}

.budgetCategoryOverview{
  background-color: pink;
}

.budgetCategory{
  background-color: chocolate;
  margin: 3px;
}

</style>