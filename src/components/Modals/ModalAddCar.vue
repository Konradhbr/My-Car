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
          <button type="submit" class="button button--full">
            <span>Dodaj</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
//import firebase from "firebase";

export default {
  name: "ModalDepositSuccess",
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
      error: null
    };
  },
  props: {},
  methods: {
    submit() {
      this.$emit("opensuccess");
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(this.form.email, this.form.password)
      //   // eslint-disable-next-line no-unused-vars
      //   .then(data => {
      //     this.$router.replace({ name: "Dashboard" });
      //   })
      //   .catch(err => {
      //     this.error = err.message;
      //   });
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
