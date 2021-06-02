<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Rejestracja</span>

      <div class="modal__text">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form action="#" @submit.prevent="register">
          <label for="email">E-mail</label><br />
          <input
            id="email"
            type="email"
            name="email"
            value=""
            required
            autofocus
            v-model="form.email"
          />
          <br />
          <label for="password">Hasło</label><br />
          <input
            id="password"
            type="password"
            name="password"
            value=""
            required
            autofocus
            v-model="form.password"
          />
          <br />
          <button
            type="submit"
            class="button button--full"
            @click="$emit('opensuccess')"
          >
            <span>register</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import firebase from "firebase";
import Modal from "@/components/Modals/Modal.vue";

export default {
  name: "ModalRegister",
  components: { Modal },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    close() {
      this.$emit("close", true);
    },
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
