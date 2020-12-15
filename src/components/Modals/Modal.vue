<template>
  <portal to="modal">
    <transition appear name="fade">
      <div class="modal">
        <div class="modal-inner">
          <a href="#" class="modal-close" @click.prevent="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
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
  </portal>
</template>

<script>
export default {
	data() {
		return {
			scrollOptions: {
				bar: {
					background: '#272727',
					onlyShowBarOnScroll: false,
					initialScrollY: 100,
					initialScrollX: 100,
					size: '8px',
					keepShow: true,
				},
			},
		};
	},
	mounted() {
		document.documentElement.classList.add('modal-opened');
	},
	// unmounted() {
	// 	document.documentElement.classList.remove('modal-opened');
	// },

	methods: {
		close() {
			this.$emit('close');
		},
	},
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

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  border: 2px solid rgba(15, 32, 108, 0.3);
  border-radius: 100%;
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

.modal-buttons {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;

  display: flex;
  //   justify-content: space-between;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  z-index: 10;

  .btn {
    margin-top: 0;
  }
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
