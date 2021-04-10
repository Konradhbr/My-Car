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
          <h4>Średnie spalanie auta w mieście (I)</h4>
          <h3>{{ fuelConsumptionCity }}</h3>
        </div>
        <div class="service__content__sum">
          <h4>Średnie spalanie auta w trasie (I)</h4>
          <h3>{{ fuelConsumptionRoad }}</h3>
        </div>
        <div class="service__content__sum">
          <h4>Średnie spalanie auta w cyklu mieszanym (I)</h4>
          <h3>{{ fuelConsumptionMixed }}</h3>
        </div>
        <div class="service__content__sum">
          <h4>Całkowity koszt wydatku na paliwo (zł)</h4>
          <h3>{{ fuelFinalPrice }}</h3>
        </div>
        <div
          class="service__content__button"
          @click="modalAddFuelRaport = true"
        >
          <button class="button button--full"><span>Dodaj</span></button>
        </div>
        <div class="service__content__chart">
          <div>
            <PieChart
              :city="this.counterCity"
              :road="this.counterRoad"
              :mixed="this.counterMix"
            />
          </div>
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
import firebase from "firebase";
import { mapGetters } from "vuex";
import PieChart from "@/components/Charts/PieChart.vue";
import ModalAddFuelRaport from "../Modals/ModalAddFuelRaport.vue";
export default {
  components: { PieChart, ModalAddFuelRaport },
  name: "FuelConsumption",
	computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      modalAddFuelRaport: false,
      fuelConsumptionCity: null,
      fuelConsumptionRoad: null,
      fuelConsumptionMixed: null,
      fuelFinalPrice: null,
			counterRoad: null,
			counterCity: null,
			counterMix: null
    };
  },
  created() {
    this.setFuelRaport();
    //console.log(this.result)
  },
  methods: {
    async setFuelRaport() {
      var service = firebase
        .database()
        .ref(
          `${this.user.data.email.replace(".", ",")}/` +
            "cars/" +
            `${this.user.activeCar}/` +
            "fuel-raport/"
        );
      service.on("value", snapshot => {
        const data = snapshot.val();

				let counterRoad = 0;
				let totalFuelConsuptionRoad = 0;
				let counterCity = 0
				let totalFuelConsuptionCity = 0;
				let counterMix = 0
				let totalFuelConsuptionMix = 0;

        for (var i in data) {
				  let dataFuelConsumption = parseInt(data.[i].fuelConsumption);
				  let dataKilometers = parseInt(data.[i].kilometers);
				  let dataRoadType = data.[i].roadType;
					let dataFuelPrice = parseInt(data.[i].fuelPrice);
					let averageFuelConsumption;

					this.fuelFinalPrice += dataFuelPrice

					averageFuelConsumption = (dataFuelConsumption / dataKilometers) * 100
					if(dataRoadType === "Miasto") {

						counterCity +=1
						totalFuelConsuptionCity += averageFuelConsumption
					}
						if(dataRoadType === "Trasa") {

						counterRoad +=1
						totalFuelConsuptionRoad += averageFuelConsumption
					}
						if(dataRoadType === "Cykl mieszany") {

						counterMix +=1
						totalFuelConsuptionMix += averageFuelConsumption
					}
        }
				this.fuelConsumptionCity = (totalFuelConsuptionCity / counterCity).toFixed(1);
				this.fuelConsumptionRoad = (totalFuelConsuptionRoad / counterRoad).toFixed(1);
				this.fuelConsumptionMixed = (totalFuelConsuptionMix / counterMix).toFixed(1);
				this.counterRoad = counterRoad;
				this.counterCity = counterCity;
				this.counterMix = counterMix
				if(isNaN(this.fuelConsumptionCity) === true  || isNaN(this.fuelConsumptionRoad) === true || isNaN(this.fuelConsumptionMixed) === true) {
					if(isNaN(this.fuelConsumptionCity) === true  ) {
						this.fuelConsumptionCity = 'Brak danych '
					}
						if(isNaN(this.fuelConsumptionRoad) === true ) {
						this.fuelConsumptionRoad = 'Brak danych '
					}
						if(isNaN(this.fuelConsumptionMixed) === true) {
						this.fuelConsumptionMixed = 'Brak danych '
					}

				}

      });
    }
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
@media screen and (min-width: 820px) {
  .service__content__button {
    width: 100%;
    display: flex;
    justify-content: center;

    .button {
      width: 20%;
    }
  }
}

@media screen and (min-width: 1010px) {
  .service__content__top {
    justify-content: space-between;
  }
  .fuel__consumption__title {
    width: 70%;
  }
}
</style>
