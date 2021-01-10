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

<style lang="scss" scoped></style>
