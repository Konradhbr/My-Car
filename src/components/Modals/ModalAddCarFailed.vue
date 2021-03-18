<template>
  <modalBasic>
    <div class="modal__info">
      <span class="decor">Błąd</span>

      <div class="modal__text">
        <div class="success-icon"><IconFail /></div>
        <h4>
          Niestety nie udało się dodać auta. Możesz posiadać w swoim garażu
          <span class="underline--red">maksymalnie 5 aut</span>
        </h4>
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
import IconFail from "@/components/Icons/IconFail.vue";
export default {
  name: "ModalAddCarFailed",
  components: { ModalBasic, IconFail },
  props: {},
  methods: {
    // close() {
    //   this.$emit("close", true);
    // }
  }
};
</script>

<style lang="scss" scoped>
h3,
h4 {
  color: black;
  margin-bottom: 20px;
}
</style>
