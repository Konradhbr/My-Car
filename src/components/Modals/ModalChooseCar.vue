<template>
  <modalBasic :showCloseSign="false">
    <div class="modal__info">
      <span class="decor">lorem</span>
      <div class="modal__text">
        <form action="#" @submit.prevent="submit">
          <label for="cars">Wybierz auto</label>
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
          </select>
          <button type="submit" class="button button--full">
            <span>Wybierz</span>
          </button>
        </form>
        <button class="button button--full" @click="$emit('openModalAddCar')">
          <span>Dodaj nowe auto</span>
        </button>
      </div>
    </div>
  </modalBasic>
</template>

<script>
import ModalBasic from "@/components/Modals/ModalBasic.vue";
import firebase from "firebase";

export default {
  name: "ModalChooseCar",
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

<style lang="scss" scoped></style>
