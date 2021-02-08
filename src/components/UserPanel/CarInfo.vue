<template>
  <div class="carInfo container">
    <div class="carInfo__actual__car">
      <h3>Volvo S40</h3>
    </div>
    <div class="carInfo__date">
      <div class="carInfo__date__insurance">
        <h4>Data ważności ubezpieczenia OC auta</h4>
        <p>20.04.2021</p>
      </div>
      <div class="carInfo__date__review">
        <h4>Data ważności przeglądu auta</h4>
        <p>20.04.2021</p>
      </div>
    </div>
    <div class="carInfo__info">
      <div class="carInfo__info__item">
        <h4>Rok produkcji</h4>
        <p>2006</p>
      </div>
      <div class="carInfo__info__item">
        <h4>Przebieg auta</h4>
        <p>200 000 km</p>
      </div>
      <div class="carInfo__info__item">
        <h4>Pojemność silnika</h4>
        <p>2.0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarInfo,"
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
