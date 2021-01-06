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

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter .modal,
.fade-leave-to .modal {
  transform: translate3d(0, 60px, 0);
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
}
.modal-inner {
  max-width: 960px;
  width: calc(100% - 20px);
  margin: 10px;
  background-color: white;
  min-height: 500px;
  position: relative;
}

.modal-wrap {
  height: 100%;
}

.modal-body {
  width: 100%;
  height: auto;
  overflow: auto;
}

@media screen and (min-width: 1024px) {
  .modal {
    align-items: center;
  }

  .modal-inner {
    width: 80%;
    min-height: 500px;
    margin: 30px;
  }
}
</style>
