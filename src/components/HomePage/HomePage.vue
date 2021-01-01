<template>
  <div>
    <div class="home__nav"><NavMenu /></div>
    <div class="home">
      <!-- <div><Text /></div> -->
      <div class="home__text ">
        <div class="home__title">
          <h1>title</h1>
        </div>
        <div class="home__description">
          <h3>description</h3>
        </div>
      </div>
      <div class="home__icon">
        <div class="icon" @click="scroll">
          <img src="@/assets/images/scroll-icon.png" alt="scroll" />
        </div>
        <a href="#" id="return-top" v-scroll-to="'#top'">Top</a>
      </div>
    </div>
    <div id="top" class="home__news"></div>
  </div>
</template>

<script>
// import VideoBackground from './VideoBackground.vue';
import NavMenu from "../Header/NavMenu.vue";
// import News from './News.vue';

export default {
  name: "HomePage",
  components: {
    // VideoBackground,
    NavMenu

    // News,
  },
  methods: {
    scroll() {
      document.getElementById("element").scrollIntoView().style.transition =
        "1s";
    },
    scroll2() {
      const Vue = require("vue");
      const VueScrollTo = require("vue-scrollto");
      Vue.use(VueScrollTo);
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://unpkg.com/vue-scrollto");
    document.head.appendChild(recaptchaScript);
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  background-color: green;
}
.home__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 70%;
}
.home__icon {
  display: flex;
  justify-content: center;
  width: 100%;
}
.icon {
  width: 60px;
}

.home__news {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 1000px;
}
#element {
  transition: 2s;
}
</style>
