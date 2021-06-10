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
          <router-link :to="{ name: 'Dashboard-CarInfo' }">
            <button type="submit" class="button button--full" @click="submit">
              <span>Wybierz</span>
            </button>
          </router-link>
        </form>
        <button class="button button--full" @click="$emit('openModalAddCar')">
          <span>Dodaj nowe auto</span>
        </button>
        <p>{{ prefs }}</p>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modals/Modal.vue';
import firebase from 'firebase';
import { mapGetters } from 'vuex';

export default {
  name: 'ModalChooseCar',
  components: { Modal },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user',
    }),
    prefs: function() {
      var data = {
        car: this.selected,
        openModal: false,
      };
      localStorage.setItem('data', JSON.stringify(data));
      return data;
    },
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      error: null,
      carsCollection: [],
      selected: null,
    };
  },
  mounted() {
    this.chooseCar();
  },
  created: function() {
    var loaded = JSON.parse(localStorage.getItem('data'));
    if (loaded) {
      console.log(loaded);
      this.user.activeCar = loaded.car;
      this.user.firstOpenDashboard = loaded.openModal;
    } else {
      console.log('not loaded');
    }
  },
  methods: {
    close() {
      this.$emit('close', true);
    },
    async chooseCar() {
      var starCountRef = firebase
        .database()
        .ref(`${this.user.data.email.replace('.', ',')}/` + 'cars');
      starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        this.carsCollection = Object.keys(data);
      });
    },
    submit() {
      this.user.activeCar = this.selected;
      if (this.user.activeCar !== null) {
        this.user.firstOpenDashboard = false;
      }
      this.$router.push(`/${this.selected}`);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>
