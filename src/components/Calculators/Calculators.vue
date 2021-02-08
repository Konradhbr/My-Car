<template>
  <div class="calcPage container">
    <div class="home__nav">
      <NavMenu :blackBG="true" />
    </div>
    <div class="content">
      <div class="mainText">
        <h3>lista kalkulatorów</h3>
        <!-- <h3>sub text</h3> -->
      </div>
      <div class="calculators">
        <div class="calculators__item fuel"><FuelConsumptionCalculator /></div>
        <div class="calculators__item lpg"><LPGCalculator /></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "../Header/NavMenu.vue";
import LPGCalculator from "@/components/Calculators/LPGCalculator.vue";
import FuelConsumptionCalculator from "./FuelConsumptionCalculator.vue";

export default {
  name: "Calculators",
  components: {
    NavMenu,
    LPGCalculator,
    FuelConsumptionCalculator
  }
};
</script>
<style lang="scss" scoped>
.calcPage {
  width: 100%;
  height: auto;
  background-color: white;
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
.content {
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: auto;
  //background-color: red;
}
.mainText {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-top: 130px;

  h3 {
    color: black;
  }
}
.calculators {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  z-index: 1;
}
.lpg {
  display: block;
  height: fit-content;
  width: 100%;
  z-index: 2;
}
.fuel {
  display: block;
  z-index: 2;
  height: fit-content;
  width: 100%;
}

@media screen and (min-width: 1010px) {
  .calculators {
    flex-direction: row;
  }
  .calculators__item {
    margin: 40px;
  }
}
</style>
