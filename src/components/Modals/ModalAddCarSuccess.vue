<template>
  <modalBasic>
    <div class="modal__info">
      <span class="decor">Sukces</span>

      <div class="modal__text">
        <div class="success-icon"><IconSuccess /></div>
        <h3>Auto dodane <span class="underline--red">pomyślnie</span></h3>
        <button
          type="submit"
          class="button button--full"
          @close="close"
          @click="$emit('close')"
        >
          <span>ok</span>
        </button>
      </div>
    </div>
  </modalBasic>
</template>

<script>
import ModalBasic from "@/components/Modals/ModalBasic.vue";

export default {
  name: "ModalAddCarSuccess",
  components: { ModalBasic },
  props: {},
  methods: {
    // close() {
    //   this.$emit("close", true);
    // }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: black;
  margin-bottom: 20px;
}
</style>
