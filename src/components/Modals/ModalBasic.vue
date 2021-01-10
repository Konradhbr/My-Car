<template>
  <transition appear name="fade">
    <div class="modal">
      <div class="modal-inner">
        <div class="modal-wrap">
          <div class="modal-body"><slot></slot></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrollOptions: {
        bar: {
          background: "#272727",
          onlyShowBarOnScroll: false,
          initialScrollY: 100,
          initialScrollX: 100,
          size: "8px",
          keepShow: true
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
