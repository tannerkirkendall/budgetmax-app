
<template>
  <div class="about">
    <h1>About</h1>
    <div class="mainBudget">
      <div class="budgetSelctor">
        <span class="budgetdate leftArrow"><<</span>
        <span class="budgetdate selectedDate">Nov 1 - Nov 30</span>
        <span class="budgetdate rightArrow">>></span>
      </div>
      <div class="budgetOverview">
        <div class="budgetCategories">
          <span class="budgetCategoriesName">Essentials</span>
          <span class="budgetCategoriesLeft">$200.23</span>
          
        </div>
        <div class="budgetCategories">
          <span class="budgetCategoriesName">Non-Essentials</span>
          <span class="budgetCategoriesLeft">$520.44</span>
        </div>
        <div class="budgetCategories">
          <span class="budgetCategoriesName">Bills</span>
          <span class="budgetCategoriesLeft">$1920.24</span>
        </div>
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
  width: 600px;
  margin: 15px;
}

.mainBudget{
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  font-size: 1.3em;
}

.budgetSelctor{
  background-color: cadetblue;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
}


.budgetCategories{
  background-color:burlywood;
  margin: 3px;
  font-size: .8em;
  border: solid;
  height: 60px;
  border-radius: 5px;
  padding-top: 15px;
}

.budgetCategoriesLeft{
  float: right;
  margin-right: 15px;
}

.budgetCategoriesName{
  margin-left: 15px;
}

.budgetCategoryOverview{
  background-color: pink;
  border-radius: 5px;
}

.budgetCategory{
  background-color: chocolate;
  margin: 5px;
  border-radius: 3px;
}

</style>