<template>
  <modal @close="$emit('close')">
    <div class="modal__info">
      <span class="decor">Zaktualizuj dane auta</span>

      <div class="modal__text">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <form action="#" @submit.prevent="UpdateCar">
          <label for="mileage">Przebieg</label><br />
          <input
            id="mileage"
            type="number"
            class="form-control"
            name="mileage"
            placeholder="np. 400000"
            v-model="form.mileage"
          />
          <br />
          <label for="engine">Silnik</label><br />
          <input
            id="engine"
            type="number"
            class="form-control"
            name="engine"
            placeholder="np. 2.0"
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.1"
            v-model="form.engine"
          />
          <br />
          <label for="insurance">Data ważności OC</label><br />
          <input
            id="insurance"
            type="date"
            class="form-control"
            name="insurance"
            v-model="form.insurance"
          />
          <br />
          <label for="review">Data ważności przeglądu auta </label><br />
          <input
            id="review"
            type="date"
            class="form-control"
            name="review"
            v-model="form.review"
          />
          <br />
          <button
            type="submit"
            class="button button--full"
            @click.prevent="UpdateCar"
          >
            <span>Aktualizuj</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex';

import Modal from '@/components/Modals/Modal.vue';
import firebase from 'firebase';

export default {
  name: 'ModalAddCar',
  components: { Modal },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  data() {
    return {
      form: {
        mileage: null,
        engine: null,
        insurance: null,
        review: null,
        brand: null,
        model: null,
        year: null,
      },
      error: null,
      submitted: false,
      id: null,
      carCounter: null,
    };
  },
  created() {
    (this.form.mileage = this.user.activeCarData.mileage),
      (this.form.engine = this.user.activeCarData.engine),
      (this.form.insurance = this.user.activeCarData.insuranceDate),
      (this.form.review = this.user.activeCarData.reviewDate);
    (this.form.brand = this.user.activeCarData.brand),
      (this.form.model = this.user.activeCarData.model),
      (this.form.year = this.user.activeCarData.year);
    //  form: {
    //     mileage: this.user.activeCarData.mileage,
    //     engine: this.user.activeCarData.engine,
    //     insurance: this.user.activeCarData.insuranceDate,
    //     review: this.user.activeCarData.reviewDate,
    //   },
  },
  methods: {
    UpdateCar() {
      firebase
        .database()
        .ref(
          `${this.user.data.email.replace('.', ',')}/` +
            'cars/' +
            `${this.user.activeCar}/`
        )
        .set({
          mileage: this.form.mileage,
          engine: this.form.engine,
          insurance: this.form.insurance,
          review: this.form.review,
          model: this.form.model,
          brand: this.form.brand,

          year: this.form.year,
        });
      this.$emit('close');
    },
  },
  // async counter() {
  //   var ref = firebase
  //     .database()
  //     .ref(`${this.user.data.email.replace('.', ',')}/cars`); // gdy let results = await nie było dodane to return zwracał promise function. trzeba było dodać await
  //   let results = await ref.once('value').then(function(snapshot) {
  //     var refAmount = snapshot.numChildren();
  //     return refAmount;
  //   });

  //   this.carCounter = results;
  // },
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
}
</style>
