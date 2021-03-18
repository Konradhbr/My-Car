<template>
  <div class="carInfo container">
    <div class="carInfo__actual__car">
      <h3>{{ carName }}</h3>
    </div>
    <div class="carInfo__date">
      <div class="carInfo__date__insurance">
        <h4>Data ważności ubezpieczenia OC auta</h4>
        <p>{{ insuranceDate }}</p>
      </div>
      <div class="carInfo__date__review">
        <h4>Data ważności przeglądu auta</h4>
        <p>{{ reviewDate }}</p>
      </div>
    </div>
    <div class="carInfo__info">
      <div class="carInfo__info__item">
        <h4>Rok produkcji</h4>
        <p>{{ year }}</p>
      </div>
      <div class="carInfo__info__item">
        <h4>Przebieg auta</h4>
        <p>{{ mileage }} km</p>
      </div>
      <div class="carInfo__info__item">
        <h4>Pojemność silnika</h4>
        <p>{{ engine }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "CarInfo",
  computed: {
    // map `this.user` to `this.$store..user`
    ...mapGetters({
      user: "user"
    })
  },
  data() {
    return {
      carName: "",
      insuranceDate: "",
      reviewDate: "",
      year: "",
      mileage: "",
      engine: "",
      activeCar: this.user.activeCar
    };
  },
  mounted() {
    this.setCar();
    console.log(this.carName);
  },
  methods: {
    async setCar() {
      var carInfo = firebase
        .database()
        .ref(
          `${this.user.data.email.replace(".", ",")}/` +
            "cars/" +
            `${this.user.activeCar}`
        );
      carInfo.on("value", snapshot => {
        const data = snapshot.val();
        this.carName = data.brand + " " + data.model;
        this.insuranceDate = data.insurance;
        this.reviewDate = data.review;
        this.year = data.year;
        this.mileage = data.mileage;
        this.engine = data.engine;
        console.log(data.year);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.carInfo {
  margin-top: 40px;

  h3 {
    color: $color-red;
  }
  h4 {
    color: black;
  }
}
.carInfo__actual__car {
  margin-bottom: 20px;
}
.carInfo__date {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: auto;

  div {
    margin-bottom: 20px;
  }
}
.carInfo__info__item {
  margin-bottom: 20px;
}
@media screen and (min-width: 1010px) {
  .carInfo__date {
    flex-direction: row;
    margin-bottom: 40px;
  }
  .carInfo__actual__car,
  .carInfo__info__item {
    margin-bottom: 40px;
  }
}
</style>
