<template>
  <div>
    <div class="banner">
      <div class="banner__label">
        <img src="@/assets/images/piggy-bank.png" alt="piggy-bank" />
      </div>
      <span class="banner__title">
        <h4>kalkulator opłacalności instalacji lpg</h4>
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
      <div class="addValues">
        <div class="addValues__petrol-price addValues__item">
          <label for="petrolPrice">Cena benzyny (zł)</label>
          <input
            type="number"
            id="petrolPrice"
            name="petrolPrice"
            min="0.01"
            max="10.00"
            v-model="petrolPrice"
            placeholder="np. 4.10"
          />
        </div>
        <div class="addValues__lpg-price addValues__item">
          <label for="lpgPrice">Cena LPG (zł)</label>
          <input
            type="number"
            id="lpgPrice"
            name="lpgPrice"
            min="0.01"
            max="10.00"
            v-model="lpgPrice"
            placeholder="np. 2.05"
          />
        </div>
        <div class="addValues__item">
          <label for="petrolSlider">Średnie zużycie benzyny na 100 km:</label>
          <vue-slider v-model="petrolConsumption" />
        </div>
        <div class="addValues__item">
          <label for="lpgSlider">Średnie zużycie gazu na 100 km:</label>
          <vue-slider v-model="lpgConsumption" />
        </div>
        <div class="addValues__mileage-amount addValues__item">
          <label for="mileage">Śr. przebieg w miesiącu (km):</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            min="1"
            max="200000"
            v-model="mileage"
            placeholder="np. 2000"
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
            <h3 class="underline--red">Oszczędzasz</h3>
            <h4>
              <p>w miesiącu</p>
              {{ saveMonth }} zł
            </h4>
            <h4>
              <p>w roku</p>
              {{ saveYear }} zł
            </h4>
            <h4>
              Koszt montażu instalacji zwróci się po: {{ months }} miesiącach
            </h4>
            <p>Przyjęto średni koszt instalacji 3000 zł</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "LPGCalculator",
  components: {
    VueSlider
  },
  data() {
    return {
      petrolPrice: "",
      lpgPrice: "",
      mileage: "",
      petrolConsumption: "",
      lpgConsumption: "",
      show: false,
      isOpen: false,
      saveYear: "",
      saveMonth: "",
      months: "",
      lpgMonthlyPrice: "",
      petrolMonthlyPrice: ""
    };
  },
  methods: {
    reset() {
      (this.petrolPrice = ""),
        (this.lpgPrice = ""),
        (this.mileage = ""),
        (this.petrolValue = ""),
        (this.lpgValue = ""),
        (this.show = false);
    },
    result() {
      this.lpgMonthlyPrice =
        (this.mileage / 100) * this.lpgConsumption * this.lpgPrice;
      this.petrolMonthlyPrice =
        (this.mileage / 100) * this.petrolConsumption * this.petrolPrice;
      this.saveMonth = parseInt(this.petrolMonthlyPrice - this.lpgMonthlyPrice);
      this.saveYear = parseInt(this.saveMonth * 12);
      this.months = parseInt(3000 / this.saveMonth);
    }
  },
  computed: {
    checkInputs: function() {
      if ((this.petrolPrice && this.lpgPrice && this.mileage) != "") {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: auto;
  background-color: $color-gray;
  background-size: cover;
  overflow: hidden;
  border: 1px solid rgba(15, 32, 108, 0.15);
  border-bottom: 3px solid rgba(15, 32, 108, 0.3);
  margin-top: 30px;
  p {
    color: darkblue;
    line-height: 24px;
  }
}
.padding-zero {
  padding-bottom: 0;
}

.banner__title {
  h4 {
    text-align: center;
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
.addValues__item {
  margin-bottom: 25px;
}
.addValues__mileage-amount {
  input {
    margin: 15px 0;
    width: 150px;
  }
}
input {
  height: 25px;
  width: 80px;
  margin-left: 20px;
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
  //background-color: green;
}
.result {
  margin-top: 50px;
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
</style>
