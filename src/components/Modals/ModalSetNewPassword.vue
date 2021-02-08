<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Nowe hasło</span>
      <div class="modal__text">
        <form @submit.prevent="onSubmit()">
          <label for="name">Hasło</label><br />
          <input
            name="password"
            type="text"
            value=""
            v-model="form.password"
            required
          />
          <br />
          <router-link :to="{ name: Home }">
            <button
              type="submit"
              class="button button--full"
              @click="setPassword"
            >
              <span>Ustaw nowe hasło</span>
            </button>
          </router-link>
        </form>
      </div>
      <div
        class="modal__message"
        :class="{ 'modal__message--active': recoverAlert }"
      >
        <p>
          Hasło zmienione
        </p>
      </div>
    </div>
    <router-view></router-view>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";

export default {
  name: "ModalRecoverPassword",
  components: { Modal },
  data() {
    return {
      recoverAlert: false,
      form: {
        password: ""
      }
    };
  },
  methods: {
    close() {
      this.$emit("close", true);
    },
    onSubmit() {
      firebase
        .auth()
        .updateCurrentUser(this.form.password)
        .then(() => {
          this.emailSending = false;
        })
        .catch(error => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
    setPassword() {
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.form.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch(error => {
          this.emailSending = false;
          this.error = error.message;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
.modal__message {
  text-align: center;
  display: none;
}
.modal__message--active {
  display: block;
}
</style>
