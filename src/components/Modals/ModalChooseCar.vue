<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Wybór auta</span>
      <div class="modal__text">
        <form action="#" @submit.prevent="submit">
          <label for="cars">Wybierz auto</label><br />
          <select id="cars" name="cars" v-model="selected">
            <option v-for="car in carsCollection" :key="car">{{ car }}</option>
          </select>
          <button type="submit" class="button button--full" @click="submit">
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
    // setActiveCar() {
    //   // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    //   return (this.user.activeCar = this.selected);
    // }
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null,
      carsCollection: [],
      selected: null
    };
  },
  mounted() {
    this.chooseCar();
  },
  props: {},
  methods: {
    close() {
      this.$emit("close", true);
    },
    async chooseCar() {
      var starCountRef = firebase
        .database()
        .ref(`${this.user.data.email.replace(".", ",")}/` + "cars");
      starCountRef.on("value", snapshot => {
        const data = snapshot.val();
        this.carsCollection = Object.keys(data);
      });
    },
    submit() {
      this.user.activeCar = this.selected;
      if (this.user.activeCar !== null) {
        this.user.firstOpenDashboard = false;
      }
      this.$emit("close");
    }
    // async setActiveCar() {
    //   this.user.activeCar = this.selected;
    // }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>
