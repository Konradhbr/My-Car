<template>
  <modal @close="$emit('close')">
    <div class="modal__info">
      <span class="decor">Dodaj czynność serwisową</span>

      <div class="modal__text">
        <form action="#" @submit.prevent="submit">
          <label for="brand">Czynność</label><br />
          <input
            id="service"
            type="text"
            class="form-control"
            name="service"
            placeholder="np. wymiana rozrządu"
            value
            autofocus
            required
            v-model="form.service"
          />
          <br />
          <label for="brand">Cena (zł)</label><br />
          <input
            id="price"
            type="text"
            class="form-control"
            name="price"
            placeholder="np. 2000"
            value
            autofocus
            required
            v-model="form.price"
          />
          <br />
          <label for="brand">Data</label><br />
          <input
            id="date"
            type="date"
            class="form-control"
            name="date"
            value
            autofocus
            required
            v-model="form.date"
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
import { mapGetters } from "vuex";

import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";

export default {
  name: "ModalDepositSuccess",
  components: { Modal },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  data() {
    return {
      form: {
        service: "",
        price: "",
        date: ""
      },
      error: null
    };
  },

  props: {},
  methods: {
    submit() {
      firebase
        .database()
        .ref(
          `${this.user.data.email.replace(".", ",")}/` +
            "cars/" +
            `${this.user.activeCar}/` +
            "service/" +
            `${this.form.service}`
        )
        .set({
          service: this.form.service,
          price: this.form.price,
          date: this.form.date
        });
      this.$emit("opensuccess");
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
