<template>
  <div>
    <div class="home__nav"><NavMenu /></div>
    <div class="home">
      <div class="bg"><VideoBackground /></div>
      <div class="home__text container">
        <div class="home__title">
          <h2>
            Zarządzaj swoim<br />
            autem
            <span class="underline--red">online</span>
          </h2>
        </div>
        <div class="home__description">
          <h4>
            w łatwy i szybki sposób kontroluj<br />
            statystyki i dane swojego auta
          </h4>
        </div>
      </div>
      <div class="home__icon">
        <div class="icon">
          <a href="#news" id="goNews">
            <img src="/images/scroll-icon.png" alt="scroll" />
          </a>
        </div>
      </div>
    </div>
    <div class="home__news">
      <router-view :key="$route.fullPath"></router-view>

      <div class="news-gradient"></div>
      <div class="news__description container">
        <h2 id="news" class="news--red">Newsy</h2>
        <h4>
          Sprawdź najnowsze informacje<br />
          oraz ciekawostki ze świata motoryzacji
        </h4>
      </div>
      <div id="news" class="home__news"><News ref="news" /></div>
    </div>
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
  created() {
    if (this.$route.name === "Home") {
      this.$refs.news;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: auto;
  background-color: black;
}

.home__text {
  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  width: 100%;
}
.home__title {
  margin-bottom: 100px;
}

.home__icon {
  position: absolute;
  bottom: 120px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
}
.icon {
  width: 60px;
}

.bg {
  position: block;
  width: 100%;
  height: 100vh;
  opacity: 0.7;
}

.home__news {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.news-gradient {
  background-image: linear-gradient(to bottom, transparent, $color-purple2);
  top: -324px;
  width: 100%;
  height: 332px;
  position: absolute;
}
.news--red {
  color: $color-red;
  text-align: left;
  margin-bottom: 10px;
}
.news__description {
  width: 100%;
  height: auto;
  padding: 200px 5% 100px 5%;
  background-color: $color-purple2;
  z-index: 2;
  text-align: left;
  h4 {
    line-height: 35px;
  }
}
#element {
  transition: 2s;
}
@media screen and (min-width: 1010px) {
  .home__text {
    margin-top: 120px;
    text-align: left;
  }
  .home__title {
    margin-bottom: 50px;
  }
}
</style>
