<template>
  <div>
    <div class="banner">
      <div class="banner__label">
        <img src="@/assets/Icons/fuel.svg" alt="fuel" />
      </div>
      <span class="banner__title">
        <h4>Kalkulator średniego spalania na 100 km</h4>
      </span>
      <div class="banner__button">
        <div class="dropbtn">
          <div
            type="submit"
            class="button"
            @click="
              isOpen = !isOpen;
              reset();
            "
          >
            <span>sprawdź</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="profit__wrapper"
      :class="{ 'banner__calculate-active': isOpen }"
    >
      <form action="#" @submit.prevent="submit">
        <div class="addValues">
          <div class="addValues__fuel-amount addValues__item">
            <label for="fuelAmount">Spalone paliwo w litrach</label> <br />
            <input
              type="number"
              id="fuelAmount"
              step="any"
              name="fuelAmount"
              placeholder="np. 40"
              v-model="fuelAmount"
              required
            />
          </div>
          <div class="addValues__distance addValues__item">
            <label for="distance">Ilość przejechanych kilometrów </label><br />
            <input
              type="number"
              step="any"
              id="distance"
              name="distance"
              placeholder="np. 1000"
              v-model="distance"
              required
            />
          </div>
          <div class="addValues__fuel-prize addValues__item">
            <label for="fuelPrize">Cena litra paliwa (zł) </label><br />
            <input
              type="number"
              id="fuelPrize"
              step="any"
              name="fuelPrize"
              placeholder="np. 4,20"
              v-model="fuelPrize"
              required
            />
          </div>
          <button
            type="submit"
            class="button"
            @click="(show = !show), result()"
            :disabled="!checkInputs"
          >
            <span>Oblicz</span>
          </button>
          <transition name="slide-fade">
            <div class="result" v-if="show">
              <h3>Średnie spalanie auta</h3>
              <h3>
                {{ resultConsumption }} <span class="small">L</span> / 100km
              </h3>
              <br />
              <h4>Średni koszt paliwa</h4>
              <h4>{{ resultPrice }} ZŁ / 100km</h4>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FuelConsumptionCalculator',
  components: {},
  data() {
    return {
      fuelAmount: '',
      fuelPrize: '',
      distance: '',
      show: false,
      isOpen: false,
      resultConsumption: '',
      resultPrice: '',
      variable: '',
    };
  },
  methods: {
    reset() {
      (this.fuelAmount = ''),
        (this.fuelPrize = ''),
        (this.distance = ''),
        (this.show = false);
    },
    result() {
      this.resultConsumption = (
        (this.fuelAmount / this.distance) *
        100
      ).toFixed(1);
      this.resultPrice = (this.resultConsumption * this.fuelPrize).toFixed(1);
    },
  },
  computed: {
    checkInputs: function() {
      if ((this.fuelAmount && this.fuelPrize && this.distance) != '') {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: auto;
  background-color: white;
  background-size: cover;
  overflow: hidden;
  border: 1px solid rgba(15, 32, 108, 0.15);
  border-bottom: 3px solid rgba(15, 32, 108, 0.3);
  margin-top: 30px;
  background-color: $color-gray;
  text-align: center;

  p {
    color: darkblue;
    line-height: 24px;
  }
}

.fuelIcon {
  background-image: url('/src/assets/images/fuel.png');
}

.padding-zero {
  padding-bottom: 0;
}

.banner__title {
  h3 {
    color: red;
    font-size: 42px;
    line-height: 52px;
    text-align: left;
    margin-bottom: 17px;
    padding-right: 50%;
  }
}
.banner__description {
  p {
    padding-right: 50%;
  }
}
.banner__label {
  margin: 40px 0;
  text-align: center;
  img {
    width: 80px;
  }
}

.banner__button {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  overflow: hidden;
  margin-bottom: 30px;
  .dropbtn {
    display: block;
    width: fit-content;
    text-align: left;
    font-size: 17px;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
}
.profit__wrapper {
  display: none;
  border: 1px solid rgba(15, 32, 108, 0.15);
  border-bottom: 3px solid red;
  padding: 35px;
}

input {
  height: 25px;
  width: 120px;
  margin-top: 15px;
}
.deposit__notification {
  display: none;
}
.banner__calculate {
  display: none;
  position: relative;
  width: 100%;
  z-index: 1;
}
.banner__calculate-active {
  display: flex;
  flex-direction: column;
}
.sliders {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 120px;
}
.slider {
  width: 45%;
}

.profit__title {
  color: red;
  font-size: 26px;
  text-align: left;
  margin-top: 50px;
}
.profit__description {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.profit__description-percentage {
  width: 40%;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  h3 {
    color: red;
    font-size: 120px;
    text-align: left;
    width: fit-content;
    margin-bottom: 0;
  }
}
.profit__description-text {
  width: 40%;
}
.deposit__value {
  display: flex;
  justify-content: space-between;
}
.deposit__value-inner {
  display: flex;
  p {
    padding-top: 2px;
    margin-right: 6px;
  }
}
.deposit__value-info {
  display: flex;
  align-items: flex-end;
}
.profit__description-terms {
  display: flex;
}

.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
.addValues {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  button {
    margin-top: 13px;
  }
}
.addValues__item {
  margin-bottom: 25px;
}
.result {
  margin-top: 70px;
  h4,
  h3 {
    color: black;
    margin-bottom: 20px;
  }
  p {
    display: inline;
  }
}

.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.small {
  text-transform: lowercase;
}
</style>
