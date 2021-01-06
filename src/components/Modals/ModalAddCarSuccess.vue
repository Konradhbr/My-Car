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
