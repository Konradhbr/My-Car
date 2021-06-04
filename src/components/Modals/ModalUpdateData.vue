<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Aktualizacja danych</span>

      <div class="modal__text">
        <!-- <div v-if="error != null" class="alert alert-danger">{{ error }}</div> -->

        <form action="#" @submit.prevent="update">
          <div class="email">
            <label for="email">Dane</label><br />
            <input
              id="data"
              type="data"
              class="form-control"
              name="data"
              value
              required
              autofocus
              v-model="form.data"
            />
            <br />
          </div>
          <br />

          <button type="submit" class="button button--full">
            <span>Zmień</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "ModalUpdateData",
  components: { Modal },
  data() {
    return {
      error: null,
      form: {
        data: "",
        error: null
      }
    };
  },
  props: {},
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    this.goToDashboard();
  },
  methods: {
    close() {
      this.$emit("close", true);
    },
    async goToDashboard() {
      if (this.user.loggedIn) {
        this.close();
        this.$router.push("Dashboard");
      }
    },
    update() {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.form.email, this.form.password);
        })
        .catch(error => {
          this.form.error = error.message;
        });
      if (this.user.loggedIn) {
        this.close();
        this.$router.push("Dashboard");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.forgetPasssword {
  margin: 20px 0;
}
.email {
  margin-bottom: 20px;
}
.errors {
  margin-top: 15px;
  p {
    font-size: 15px;
    color: $color-red;
  }
}
</style>
