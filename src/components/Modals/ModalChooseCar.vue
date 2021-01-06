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
