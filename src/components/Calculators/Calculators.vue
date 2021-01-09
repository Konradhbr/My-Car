<template>
  <div class="calcPage container">
    <div class="home__nav">
      <NavMenu :blackBG="true" />
    </div>
    <div class="content">
      <div class="mainText">
        <h3>lista kalkulatorów</h3>
        <!-- <h3>sub text</h3> -->
      </div>
      <div class="calculators">
        <div class="fuel"><FuelConsumption /></div>
        <div class="lpg"><LPG /></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "../Header/NavMenu.vue";
import LPG from "@/components/Calculators/LPG.vue";
import FuelConsumption from "./FuelConsumption.vue";

export default {
  name: "Calculators",
  components: {
    NavMenu,
    LPG,
    FuelConsumption
  }
};
</script>
<style lang="scss" scoped>
.calcPage {
  width: 100%;
  height: auto;
  // background-color: red;
}
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
.content {
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: auto;
  background-color: red;
}
.mainText {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-top: 200px;
}
.calculators {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  z-index: 1;
}
.lpg {
  display: block;
  height: fit-content;
  width: 100%;
  z-index: 2;
}
.fuel {
  display: block;
  z-index: 2;
  height: fit-content;
  width: 100%;
}
// .calculators_box {
//   display: flex;
//   flex-direction: column;
//   height: auto;
//   width: 100%;

//   h3 {
//     margin: 70px 0 40px 0;
//   }
//   // margin: 0 30px;
// }

// #box {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: auto;
//   color: white;
//   font-family: "Raleway";
//   // font-size: 2.5rem;
// }
// .gradient-border {
//   --borderWidth: 3px;
//   background: #1d1f20;
//   position: relative;
//   border-radius: var(--borderWidth);
// }
// .gradient-border:after {
//   content: "";
//   position: absolute;
//   top: calc(-1 * var(--borderWidth));
//   left: calc(-1 * var(--borderWidth));
//   height: calc(100% + var(--borderWidth) * 2);
//   width: calc(100% + var(--borderWidth) * 2);
//   background: linear-gradient(
//     60deg,
//     #f79533,
//     #f37055,
//     #ef4e7b,
//     #a166ab,
//     #5073b8,
//     #1098ad,
//     #07b39b,
//     #6fba82
//   );
//   border-radius: calc(2 * var(--borderWidth));
//   z-index: -1;
//   animation: animatedgradient 3s ease alternate infinite;
//   background-size: 300% 300%;
// }

// @keyframes animatedgradient {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
// // @media screen and (min-width: $screen-sm) {
// //   .calculators_content{
// //   flex-direction: row;
// // }
// //}
// .calculators_box-button {
//   overflow: hidden;
//   width: 100%;
//   .dropbtn {
//     width: 100%;
//     text-align: center;
//     font-size: 17px;
//     border: none;
//     outline: none;
//     margin: 0;
//     padding: 0;

//     p {
//       text-align: center;
//     }
//   }
// }
// .calculators_box-content {
//   display: none;
//   position: relative;
//   width: 100%;
//   z-index: 1;
//   transform-origin: top;
//   transition: transform 0.4s ease-in-out;
//   overflow: hidden;
// }
// .calculators_box-content-active {
//   display: flex;
//   flex-direction: column;
//   transform-origin: top;
//   transition: transform 0.4s ease-in-out;
//   overflow: hidden;
// }
// .red {
//   width: 100%;
//   height: auto;
//   background-color: red;
//   transform-origin: top;
//   transition: transform 0.4s ease-in-out;
//   overflow: hidden;
// }

// button {
//   padding: 20px 60px;
//   border: solid thin darken(#b50064, 10%);
//   background: #b50064;
//   color: #eee;
//   &:focus {
//     outline: solid thin lighten(#b50064, 20%);
//   }
// }
// .addValues {
//   position: absolute;
//   width: 204px;
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   transform-origin: top;
//   transition: transform 0.4s ease-in-out;
//   overflow: hidden;
//   li {
//     padding: 10px;
//     background: white;
//     border-bottom: solid thin #eee;
//     border-left: solid medium #cbc;
//   }
// }
// .slide-enter,
// .slide-leave-to {
//   transform: scaleY(0);
// }
// .addValues {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: auto;
//   background-color: green;
// }
</style>
