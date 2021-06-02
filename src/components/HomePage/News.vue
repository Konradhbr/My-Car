<template>
  <div class="news">
    <div class="publications">
      <h2 class="container">Publikacje</h2>
      <div class="feedgrabbr_widget" id="fgid_210708a2263cbe8bb30d72a2a"></div>
    </div>
    <div class="news">
      <h2 class="container">Newsy</h2>
      <div class="feedgrabbr_widget" id="fgid_0cbd3a82693bdaba787db32ef"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  created() {
    // eslint-disable-next-line no-unused-vars
    async src => "https://www.feedgrabbr.com/widget/fgwidget.js";
    let fg_widgets;
    if (typeof fg_widgets === "undefined") {
      fg_widgets = new Array();
      fg_widgets.push("fgid_210708a2263cbe8bb30d72a2a");
    }
    if (typeof fg_widgets === "undefined") {
      fg_widgets = new Array();
      fg_widgets.push("fgid_0cbd3a82693bdaba787db32ef");
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  height: auto;
}
.feedgrabbr_widget {
  width: 100%;
  height: auto;
}
.publications {
  background-color: $color-purple1;
}
.news {
  background-color: $color-purple2;
}
</style>
