<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Logowanie</span>

      <div class="modal__text">
        <div v-if="error != null" class="alert alert-danger">{{ error }}</div>

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
        </form>
        <button class="button button--full" @click="$emit('openregister')">
          <span>utworz konto</span>
        </button>
        <div v-if="this.error !== null" class="errors">
          <p>{{ form.error }}</p>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  name: "ModalLogin",
  components: { Modal },
  data() {
    return {
      error: null,
      form: {
        email: "",
        password: "",
        error: null
      }
    };
  },
  props: {
    // label: {
    //   type: String,
    //   required: true
    // }
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
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
    submit() {
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
          //console.log(error.message);
          this.form.error = error.message;
        });

      // if (this.user.loggedIn) {
      //   this.close();
      //   this.$router.push("Dashboard");
      // }
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
