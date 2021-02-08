<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Wybór auta</span>
      <div class="modal__text">
        <form action="#" @submit.prevent="submit">
          <label for="cars">Wybierz auto</label><br />
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
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "ModalChooseCar",
  components: { Modal },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
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
    close() {
      this.$emit("close", true);
    },
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
button {
  margin-top: 20px;
}
</style>
