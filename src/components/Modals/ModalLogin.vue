<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">lorem</span>

      <div class="modal__text">
        <h2>login</h2>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>

        <form>
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

          <label for="password">Password</label><br />
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
          />
          <br />
          <span
            >Forgot password
            <a href="#" @click="$emit('openrecover')"
              >Recover password</a
            ></span
          >
          <button type="submit" class="button button--full">
            <span>login</span>
          </button>
          <p>or</p>
          <button
            type="submit"
            class="button button--full"
            @click="$emit('openregister')"
          >
            <span>create account</span>
          </button>
        </form>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modals/Modal.vue';
import firebase from 'firebase';

export default {
	name: 'ModalDepositSuccess',
	components: { Modal },
	data() {
		return {
			form: {
				email: '',
				password: '',
			},
			error: null,
		};
	},
	props: {
		label: {
			type: String,
			required: true,
		},
	},
	methods: {
		close() {
			this.$emit('close', true);
		},
		submit() {
			firebase
				.auth()
				.signInWithEmailAndPassword(
					this.form.email,
					this.form.password,
				)
				// eslint-disable-next-line no-unused-vars
				.then((data) => {
					this.$router.replace({ name: 'Dashboard' });
				})
				.catch((err) => {
					this.error = err.message;
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.modal__label {
  display: flex;
  padding: 60px 40px;
}

.modal__text {
  input[type='text'] {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  margin: auto;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;

  p {
    color: black;
  }
}

.modal__info {
  display: flex;
  flex-direction: column;
  padding: 50px;

  h2 {
    margin: 0 0 20px 0;
  }
}

@media screen and (min-width: 1024px) {
  .modal__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 80px;
  }
}
</style>
