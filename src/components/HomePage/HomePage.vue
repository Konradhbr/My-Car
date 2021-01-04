<template>
  <div>
    <div class="home__nav"><NavMenu /></div>
    <div class="home">
      <div class="bg"><VideoBackground /></div>
      <div class="home__text ">
        <div class="home__title">
          <h1>title</h1>
        </div>
        <div class="home__description">
          <h3>description</h3>
        </div>
      </div>
      <div class="home__icon">
        <div class="icon">
          <img src="@/assets/images/scroll-icon.png" alt="scroll" />
        </div>
        <a href="#" id="return-top"></a>
      </div>
    </div>
    <div id="top" class="home__news"><News /></div>
  </div>
</template>

<script>
import VideoBackground from "./VideoBackground.vue";
import NavMenu from "../Header/NavMenu.vue";
import News from "./News.vue";

export default {
  name: "HomePage",
  components: {
    VideoBackground,
    NavMenu,
    News
  },
  methods: {}
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: auto;
  // background-color: green;
}
.home__text {
  position: absolute;
  top: 0;
  padding-top: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  //height: 70%;
}
.home__icon {
  position: absolute;
  top: 0;
  padding-top: 50vh;
  display: flex;
  justify-content: center;
  width: 100%;
}
.icon {
  width: 60px;
}

.bg {
  position: relative;
  width: 100%;
  height: 100vh;
}

.home__news {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
}
#element {
  transition: 2s;
}
</style>
