<template>
  <div class="inner">
    <div class="inner__text">
      <h1>Design ipsum</h1>
      <p>lorem ipsum</p>
    </div>
    <div class="scroll-icon">
      <a href="#"
        ><img src="@/assets/Images/scroll-icon.png" alt="scroll"
      /></a>
    </div>
    <!-- <div id="element" style="margin-top: 500px;">
                  <p>asdasd</p></div>    -->
  </div>
</template>

<script>
export default {
  name: 'Text',
};
</script>

<style lang="scss" scoped>
.inner {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;
}
.inner__text {
  h1 {
    font-weight: 800;
  }
  //     h1 {
  //   font-size: 64px;
  //   //text-transform: uppercase;
  //   color: #fff;
  //   letter-spacing: 2px;
  //   font-weight: 500;
  //   text-align: center;

  // }
  em {
    font-style: normal;
    font-weight: 200;
  }
  p {
    color: #fff;
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 1.5px;
    text-align: center;
  }
}

.scroll-icon {
  margin-top: 45px;
  width: 100%;
  text-align: center;

  a {
    color: #fff;
    text-decoration: underline;
  }
}
@media screen and (min-width: 1024px) {
  .inner {
    padding-left: 20vh;
  }

  .inner__text {
    p {
      text-align: left;
    }
  }
  .scroll-icon {
    text-align: left;
  }
}
</style>
