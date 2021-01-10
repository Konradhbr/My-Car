<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Reset hasła</span>
      <div class="modal__text">
        <form>
          <label for="name">Email</label><br />
          <input name="name" type="text" value="" /> <br />
        </form>
        <button type="submit" class="button button--full">
          <span>odzyskaj</span>
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal.vue";

export default {
  name: "ModalRecoverPassword",
  components: { Modal },
  methods: {
    close() {
      this.$emit("close", true);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>
