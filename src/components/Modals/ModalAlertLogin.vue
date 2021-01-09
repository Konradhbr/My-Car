<template>
  <modal @close="close">
    <div class="modal__info">
      <div class="modal__text">
        <h2>Aby przejść do panelu użytkownika, najpierw Zaloguj się.</h2>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";

export default {
  name: "ModalRegisterSuccess",
  components: { Modal },
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal__label {
  display: flex;
  padding: 60px 40px;
}

.modal__text {
  input[type="text"] {
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
.success-icon {
  margin-bottom: 20px;
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
