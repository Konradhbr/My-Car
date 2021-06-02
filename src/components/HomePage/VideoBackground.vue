<template>
  <video autoplay muted loop id="video">
    <source src="@/assets/videos/video-bg.mp4" type="video/mp4" />
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
</style>
