<template>
  <modal @close="close">
    <div class="modal__info">
      <div class="modal__text">
        <h3>
          Aby przejść do panelu użytkownika, najpierw<br />
          <span class="underline--red">Zaloguj się.</span>
        </h3>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";

export default {
  name: "ModalRegisterSuccess",
  components: { Modal },
  props: {},
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
  line-height: 35px;
}
.modal__text[data-v-967c6a3e] {
  width: 70%;
}
</style>
