<template>
  <div class="fuel__consumption container">
    <div class="fuel__consumption__title">
      <h3>Raport spalania</h3>
      <h4>
        Dodaj swoje trasy oraz raporty zużycia paliwa aby mieć realny obraz
        spalania twojego auta w różnych warunkach.
      </h4>
    </div>
    <div class="fuel__consumption__content">
      <div class="service__content__top">
        <div class="service__content__sum">
          <h4>Średnie spalanie auta w mieście</h4>
          <h3>1200</h3>
        </div>
        <div class="service__content__sum">
          <h4>Średnie spalanie auta w trasie</h4>
          <h3>1200</h3>
        </div>
        <div class="service__content__sum">
          <h4>Średnie spalanie auta w cyklu mieszanym</h4>
          <h3>1200</h3>
        </div>
        <div class="service__content__sum">
          <h4>Całkowity koszt wydatku na paliwo (zł)</h4>
          <h3>1200</h3>
        </div>
        <div
          class="service__content__button"
          @click="modalAddFuelRaport = true"
        >
          <button class="button "><span>Dodaj</span></button>
        </div>
        <div class="service__content__chart">
          <div><PieChart /></div>
        </div>
      </div>
    </div>
    <ModalAddFuelRaport
      v-if="modalAddFuelRaport"
      @close="modalAddFuelRaport = false"
    />
  </div>
</template>

<script>
import PieChart from "@/components/Charts/PieChart.vue";
import ModalAddFuelRaport from "../Modals/ModalAddFuelRaport.vue";
export default {
  components: { PieChart, ModalAddFuelRaport },
  name: "FuelConsumption",
  data() {
    return {
      modalAddFuelRaport: false
    };
  }
};
</script>

<style lang="scss" scoped>
.fuel__consumption {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;

  h3,
  h4 {
    color: black;
    margin-bottom: 10px;
  }
}
.fuel__consumption__title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
}
.fuel__consumption__content {
  margin-top: 40px;
}
.service__content__top {
  display: flex;
  flex-direction: column;
}
.service__content__sum {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 20px;
}
.service__content__button,
.service__content__chart {
  margin-top: 40px;
}

@media screen and (min-width: 1010px) {
  .service__content__top {
    flex-direction: row;
    justify-content: space-between;
  }
  .fuel__consumption__title {
    width: 70%;
  }
}
</style>
