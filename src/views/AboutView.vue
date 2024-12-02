
<template>

  <div class="about">


    <div class="topSection">
      top section
    </div> 

  <div class="bottomSection">

    <div class="cat">
    <span class="catName">Essentaials</span>
    <span class="catBugLft">$432.12</span>
  </div>

  <div class="subCat">
    <span class="catName">Gas</span>
    <span class="catBugLft">($203.55)</span>
    <div>
      <span class="catName">$250.00</span>
      <span class="catBugLft">$46.45</span>
    </div>
  </div>

  <div class="subCat">
    <span class="catName">Food</span>
    <span class="catBugLft">($203.55)</span>
    <div>
      <span class="catName">$250.00</span>
      <span class="catBugLft">$46.45</span>
    </div>
  </div>

  <div class="subCat">
    <span class="catName">Piper</span>
    <span class="catBugLft">($203.55)</span>
    <div>
      <span class="catName">$250.00</span>
      <span class="catBugLft">$46.45</span>
    </div>
  </div>

  </div>


  </div>
</template>

<script setup>

</script>

<style>

.about{
  width: 600px;
  /* margin: 15px; */
  background-color: blueviolet;

}

.topSection{
  background-color: aqua;
  height: 20vh;
  overflow: scroll;
}

.bottomSection{
  height: 75vh;
  overflow: scroll;
  /* padding-bottom: 115px; */
}

.cat{
  border-style: solid;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: rgb(171, 171, 171);
  background-color: rgb(228, 228, 228);
}

.catName{
  margin-left: 5px;
}

.catBugLft {
  float: right;
  margin-right: 5px;
}

.subCat{
  background-color: rgb(236, 236, 236);
  border-style: solid;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: rgb(219, 219, 219)
}


::-webkit-scrollbar {
    display: none;
}

</style>