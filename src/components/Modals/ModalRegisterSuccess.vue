<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Sukces</span>

      <div class="modal__text">
        <div class="success-icon"><IconSuccess /></div>
        <h3>Konto utworzone pomyślnie</h3>
        <p>
          Teraz możesz zalogować się na swoje konto i zarządzać autem online.
        </p>
        <button type="submit" class="button button--full" @close="close">
          <span>ok</span>
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";
import IconSuccess from "../Icons/IconSuccess.vue";

export default {
  name: "ModalRegisterSuccess",
  components: { Modal, IconSuccess },
  props: {
    IconSuccesslabel: {
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
h3 {
  color: black;
  margin-bottom: 20px;
}
p {
  margin-bottom: 20px;
}
</style>
