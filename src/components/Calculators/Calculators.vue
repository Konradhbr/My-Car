<template>
  <div class="content">
    <div class="content_mainText">
      <h1>main text</h1>
      <h3>sub text</h3>
    </div>
    <div class="calculators">
      <div class="calculators_box gradient-border" id="box">
        <img src="" alt="" />
        <h3>kalkaltor lpg</h3>
        <div class="calculators_box-button">
          <div class="dropbtn">
            <p @click="open">calculate</p>
            <div
          class="calculators_box-content"
          :class="{ 'calculators_box-content-active': isOpen }">
          <div class="red">asd</div>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculators',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      if (this.isOpen === false) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100vh;
  height: 100vh;
}
.content_mainText {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.calculators {
  display: flex;
  flex-direction: column;
}
.calculators_box {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin: 0 30px;
}
#box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  color: white;
  font-family: 'Raleway';
  // font-size: 2.5rem;
}
.gradient-border {
  --borderWidth: 3px;
  background: #1d1f20;
  position: relative;
  border-radius: var(--borderWidth);
}
.gradient-border:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
// @media screen and (min-width: $screen-sm) {
//   .calculators_content{
//   flex-direction: row;
// }
//}
.calculators_box-button {
  float: none;
  overflow: hidden;
  .dropbtn {
    display: block;
    width: fit-content;
    text-align: left;
    font-size: 17px;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
}
.calculators_box-content {
  display: none;
  position: relative;
  width: 100%;
  z-index: 1;
}
.calculators_box-content-active {
  display: flex;
  flex-direction: column;
}
.red {
  width: 100%;
  height: auto;
  background-color: red;
}
</style>
