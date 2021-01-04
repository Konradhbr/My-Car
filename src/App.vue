<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }"> </router-link>
    <!-- <div class="container">
      <Calculators />
    </div> -->

    <router-view></router-view>
  </div>
</template>

<script>
//import HomePage from "@/components/HomePage/HomePage.vue";
//import Calculators from "./components/Calculators/Calculators.vue";
export default {
  components: {
    //HomePage
    //Calculators
  }
};
</script>
<style land="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800&display=swap");

@font-weight-light: 300;
@font-weight-normal: 400;
@font-weight-bold: 600;
@font-weight-block: 800;

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0 !important;
  padding: 0;
  overflow-x: hidden;
  min-width: fit-content;
}
.container {
  box-sizing: border-box;
  padding: 0 5%;
}
</style>
