<template>
  <div class="carInfo container">
    <div class="carInfo__actual__car">
      <h3>{{ this.user.activeCarData.brand }}</h3>
      <h3>{{ this.user.activeCarData.model }}</h3>
    </div>
    <div class="carInfo__date">
      <div class="carInfo__date__insurance">
        <h4>Data ważności ubezpieczenia OC auta</h4>
        <p>{{ this.user.activeCarData.insuranceDate }}</p>
      </div>
      <div class="carInfo__date__review">
        <h4>Data ważności przeglądu auta</h4>
        <p>{{ this.user.activeCarData.reviewDate }}</p>
      </div>
    </div>
    <div class="carInfo__info">
      <div class="carInfo__info__item">
        <h4>Rok produkcji</h4>
        <p>{{ this.user.activeCarData.year }}</p>
      </div>
      <div class="carInfo__info__item">
        <h4>Przebieg auta</h4>
        <p>{{ this.user.activeCarData.mileage }} km</p>
      </div>
      <div class="carInfo__info__item">
        <h4>Pojemność silnika</h4>
        <p>{{ this.user.activeCarData.engine }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';

export default {
  name: 'CarInfo',
  computed: {
    // map `this.user` to `this.$store..user`
    ...mapGetters({
      user: 'user',
    }),
  },
  data() {
    return {
      //  carName: null,
      // insuranceDate: null,
      // reviewDate: null,
      // year: null,
      // mileage: null,
      // engine: null,
      // activeCar: null,
    };
  },
  created() {
    this.setCar();
    //console.log(this.carName);
  },
  methods: {
    async setCar() {
      var carInfo = firebase
        .database()
        .ref(
          `${this.user.data.email.replace('.', ',')}/` +
            'cars/' +
            `${this.user.activeCar}`
        );
      carInfo.on('value', (snapshot) => {
        const data = snapshot.val();
        this.user.activeCarData.brand = data.brand;
        this.user.activeCarData.model = data.model;
        // this.user.activeCarData.carName = data.brand + ' ' + data.model;
        this.user.activeCarData.insuranceDate = data.insurance;
        this.user.activeCarData.reviewDate = data.review;
        this.user.activeCarData.year = data.year;
        this.user.activeCarData.mileage = data.mileage;
        this.user.activeCarData.engine = data.engine;

        console.log(data.year);
      });
    },
  },
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
  img {
    max-height: 40px;
    max-width: 40px;
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

.carInfo__actual__car {
  display: inline-flex;
  h3 {
    margin-right: 20px;
  }
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
