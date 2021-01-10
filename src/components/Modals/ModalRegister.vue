<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">lorem</span>

      <div class="modal__text">
        <h2>register</h2>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form action="#" @submit.prevent="submit">
          <label for="email">Email</label><br />
          <input
            id="email"
            type="email"
            name="email"
            value
            required
            autofocus
            v-model="form.email"
            placeholder="email"
          />
          <br />
          <label for="password">password</label><br />
          <input
            id="password"
            type="password"
            name="password"
            value
            required
            autofocus
            v-model="form.password"
            placeholder="password"
          />
          <br />
          <!-- <label for="name">Repeat password</label><br />
          <input
            name="password"
            type="text"
            v-model="repeatPassword"
            placeholder="Repeat password"
          /> -->
          <br />
          <div class="modal__checkbox">
            <Checkbox />
            <span class="req">*</span>
            <p>I have read and accept the terms of the agreement</p>
          </div>
          <button
            type="submit"
            class="button button--full"
            @click="$emit('opensuccess')"
          >
            <span>register</span>
          </button>
        </form>
        <p><span>*</span> - lorem</p>
      </div>
    </div>
  </modal>
</template>

<script>
import firebase from "firebase";
import Modal from "@/components/Modals/Modal.vue";
import Checkbox from "@/components/Buttons/Checkbox.vue";

export default {
  name: "ModalRegister",
  components: { Modal, Checkbox },
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
    submit() {
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
