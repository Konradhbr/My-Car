<template>
  <div class="home">
		<div class="nav"> <NavMenu /></div>

    <!-- <VideoBackground /> -->
    <Text />
		<div class="news">
			<News />
		</div>

  </div>
</template>

<script>
// import VideoBackground from './VideoBackground.vue';
import NavMenu from '../Header/NavMenu.vue';
import Text from './Text.vue';
// import News from './News.vue';

export default {
  name: 'HomePage',
  components: {
    // VideoBackground,
    NavMenu,
    Text,
    // News,
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: green;
}
</style>
