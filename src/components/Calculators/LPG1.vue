<template>
  <div>
    <div class="banner">
      <div class="banner__label">
        <img src="" alt="" />
      </div>
      <span class="banner__title">
        <h3>kalkulator opłacalności lpg</h3>
      </span>
      <div class="banner__button">
        <div class="dropbtn">
          <button
            @click="
              isOpen = !isOpen;
              reset();
            "
          >
            btn
          </button>
        </div>
      </div>
    </div>
    <div
      class="profit__wrapper"
      :class="{ 'banner__calculate-active': isOpen }"
    >
      <div class="addValues">
        <div class="addValues__petrol-price">
          <label for="petrolPrice">Petrol price</label>
          <input
            type="number"
            id="petrolPrice"
            name="petrolPrice"
            min="0.01"
            max="10.00"
            v-model="petrolPrice"
          />
        </div>
        <div class="addValues__lpg-price">
          <label for="lpgPrice">LPG price</label>
          <input
            type="number"
            id="lpgPrice"
            name="lpgPrice"
            min="0.01"
            max="10.00"
            v-model="lpgPrice"
          />
        </div>
        <div>
          <label for="petrolSlider">Średnie zużycie benzyny na 100 km:</label>
          <vue-slider v-model="petrolConsumption" />
        </div>
        <div>
          <label for="lpgSlider">Średnie zużycie gazu na 100 km:</label>
          <vue-slider v-model="lpgConsumption" />
        </div>
        <div class="addValues__mileage-amount">
          <label for="mileage">Śr. przebieg w miesiącu (km):</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            min="1"
            max="200000"
            v-model="mileage"
          />
        </div>
        <button type="submit" class="button" @click="show = !show">
          <span>Oblicz</span>
        </button>
        <transition name="slide-fade">
          <div v-if="show">
            <h2>Oszczędzasz</h2>
            <h2><p>w miesiącu</p></h2>
            <h2><p>w roku</p></h2>
            <h2>Koszt montażu instalacji zwróci się po:</h2>
            <span> miesiącach</span>
            <p>Przyjęto średni koszt instalacji 3000 zł</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

export default {
  name: 'lpg1',
  components: {
    VueSlider,
  },
  data() {
    return {
      petrolPrice: 0,
      lpgPrice: 0,
      mileage: 0,
      petrolConsumption: 0,
      lpgConsumption: 0,
      show: false,
      isOpen: false,
    };
  },
  methods: {
    reset() {
      (this.petrolPrice = 0),
        (this.lpgPrice = 0),
        (this.mileage = 0),
        (this.petrolValue = 0),
        (this.lpgValue = 0),
        (this.show = false);
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
  p {
    color: darkblue;
    line-height: 24px;
  }
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

.banner__button {
  float: none;
  overflow: hidden;
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
  padding: 0 65px 65px 65px;
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
  background-color: green;
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
