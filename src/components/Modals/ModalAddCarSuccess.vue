<template>
  <modal @close="close">
    <div class="modal__info">
      <span class="decor">Success</span>

      <div class="modal__text">
        <div class="success-icon"><IconSuccess /></div>
        <h2>Auto dodane pomyślnie</h2>
        <p>
          Rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum.
          Integer aliquam purus. Quisque lorem tortor fringilla sed
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

export default {
  name: "ModalAddCarSuccess",
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
