<template>
  <modalBasic :closeSign="false">
    <div class="modal__info">
      <span class="decor">lorem</span>

      <div class="modal__text">
        <h2>Dodaj auto</h2>
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
            pattern="[0-9.]{3}"
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
            @click="$emit('opensuccess')"
          >
            <span>Dodaj</span>
          </button>
        </form>
      </div>
    </div>
  </modalBasic>
</template>

<script>
import ModalBasic from "@/components/Modals/ModalBasic.vue";
import firebase from "firebase";

export default {
  name: "ModalDepositSuccess",
  components: { ModalBasic },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  props: {},
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.modal__label {
  display: flex;
  padding: 60px 40px;
}

.modal__text {
  input[type="text"] {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  margin: auto;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;

  p {
    color: black;
  }
}

.modal__info {
  display: flex;
  flex-direction: column;
  padding: 50px;

  h2 {
    margin: 0 0 20px 0;
  }
}

@media screen and (min-width: 1024px) {
  .modal__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 80px;
  }
}
</style>
