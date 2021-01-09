<template>
  <video autoplay muted loop id="video">
    <source src="@/assets/videos/video-bg.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</template>

<script>
export default {
  name: "VideoBackground"
};
</script>
<style lang="scss" scoped>
#video {
  position: fixed;
  z-index: -1;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  left: -111%;
  box-sizing: border-box;
}

@media screen and (min-width: 1010px) {
  #video {
    left: -20%;
  }
}

@media screen and (min-width: 1440px) {
  #video {
    left: 0;
  }
}

// #video {
//   //position: fixed;
//   right: 0;
//   bottom: 0;
//   width: 100vh;
//   // min-width: 100%;
//   height: 100vh;
//   z-index: -1;
//   overflow-x: hidden;
//   top: 50% !important;
//   left: 50% !important;
//   -webkit-transform: translate(-50%, -50%) !important;
//   -ms-transform: translate(-50%, -50%) !important;
//   transform: translate(0, 0) !important;
// }
// @media screen and (max-width: 1024px) {
//   #Video {
//     left: 69% !important;
//   }
// }
</style>
