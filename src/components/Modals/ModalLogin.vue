<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Logowanie</span>

      <div class="modal__text">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <form action="#" @submit.prevent="submit">
          <div class="email">
            <label for="email">Email</label><br />
            <input
              id="email"
              type="email"
              class="form-control"
              name="email"
              value
              required
              autofocus
              v-model="form.email"
            />
            <br />
          </div>
          <label for="password">Hasło</label><br />
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
          />
          <br />
          <div class="forgetPasssword">
            <span
              >Zapomniałeś/aś hasła
              <a href="#" @click="$emit('openrecover')"
                >Przypomnij hasło</a
              ></span
            >
          </div>

          <button type="submit" class="button button--full">
            <span>Zaloguj</span>
          </button>
          <p>lub</p>
          <button class="button button--full" @click="$emit('openregister')">
            <span>utworz konto</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";

export default {
  name: "ModalDepositSuccess",
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
  props: {
    // label: {
    //   type: String,
    //   required: true
    // }
  },
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
.forgetPasssword {
  margin: 20px 0;
}
.email {
  margin-bottom: 20px;
}
</style>
