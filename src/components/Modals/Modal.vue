<template>
  <transition appear name="fade">
    <div class="modal">
      <div class="modal-inner">
        <a
          href="#"
          class="modal-close"
          :class="{ 'modal-close-hide': (showClose = false) }"
          @click.prevent="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="#272727"
              fill-rule="evenodd"
              d="M15.1421356,1 L16.5563492,2.41421356 L10.192,8.778 L16.5563492,15.1421356 L15.1421356,16.5563492 L8.778,10.192 L2.41421356,16.5563492 L1,15.1421356 L7.364,8.778 L1,2.41421356 L2.41421356,1 L8.778,7.364 L15.1421356,1 Z"
              transform="translate(-1 -1)"
            />
          </svg>
        </a>

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
      },
      showClose: this.showCloseSign
    };
  },
  props: {
    showCloseSign: {
      type: Boolean,
      required: false
    }
  },
  mounted() {
    document.documentElement.classList.add("modal-opened");
  },
  // unmounted() {
  // 	document.documentElement.classList.remove('modal-opened');
  // },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped></style>
