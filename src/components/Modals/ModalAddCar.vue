<template>
  <modal @close="$emit('close')">
    <div class="modal__info">
      <span class="decor">Dodaj auto</span>

      <div class="modal__text">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <form action="#" @submit.prevent="submit">
          <label for="brand">Marka auta</label><br />
          <input
            id="brand"
            type="text"
            class="form-control"
            name="brand"
            placeholder="np. audi"
            value
            autofocus
            required
            v-model="form.brand"
          />
          <br />

          <label for="model">Model auta</label><br />
          <input
            id="model"
            type="text"
            class="form-control"
            name="model"
            placeholder="np. A6"
            required
            v-model="form.model"
          />
          <br />
          <label for="year">Rok produkcji</label><br />
          <input
            id="year"
            type="number"
            class="form-control"
            name="year"
            placeholder="np. 2004"
            required
            pattern="[1-9]{4}"
            v-model="form.year"
          />
          <br />
          <label for="mileage">Przebieg</label><br />
          <input
            id="mileage"
            type="number"
            class="form-control"
            name="mileage"
            placeholder="np. 400000"
            required
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
            required
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
            required
            v-model="form.insurance"
          />
          <br />
          <label for="review">Data ważności przeglądu auta </label><br />
          <input
            id="review"
            type="date"
            class="form-control"
            name="review"
            required
            v-model="form.review"
          />
          <br />
          <button
            type="submit"
            class="button button--full"
            @click.prevent="submit"
          >
            <span>Dodaj</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from "vuex";

import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";

export default {
  name: "ModalAddCar",
  components: { Modal },
  data() {
    return {
      form: {
        brand: "",
        model: "",
        year: "",
        mileage: "",
        engine: "",
        insurance: "",
        review: ""
      },
      error: null,
      submitted: false,
      id: null,
      carCounter: undefined
    };
  },
  props: {},
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    this.counter();
  },
  methods: {
    submit() {
      if (this.carCounter === 5) {
        this.$emit("openfailed");
      } else {
        firebase
          .database()
          .ref(
            `${this.user.data.email.replace(".", ",")}/` +
              "cars/" +
              `${this.carCounter + 1}/`
          )
          .set({
            brand: this.form.brand,
            model: this.form.model,
            year: this.form.year,
            mileage: this.form.mileage,
            engine: this.form.engine,
            insurance: this.form.insurance,
            review: this.form.review
          });
        this.$emit("opensuccess");
      }
    },
    // firebase
    //   .database()
    //   .ref(
    //     `${this.user.data.email.replace(".", ",")}/` +
    //       "cars/" +
    //       `${this.carCounter + 1}/`
    //   )
    //   .set({
    //     brand: this.form.brand,
    //     model: this.form.model,
    //     year: this.form.year,
    //     mileage: this.form.mileage,
    //     engine: this.form.engine,
    //     insurance: this.form.insurance,
    //     review: this.form.review
    //   });

    //}

    async counter() {
      var ref = firebase
        .database()
        .ref(`${this.user.data.email.replace(".", ",")}/cars`); // gdy let results = await nie było dodane to return zwracał promise function. trzeba było dodać await
      let results = await ref.once("value").then(function(snapshot) {
        var refAmount = snapshot.numChildren(); // 1 ("name")
        console.log(refAmount);
        return refAmount;
      });

      this.carCounter = results;
    }
  }
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
