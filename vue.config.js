// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         prependData: `
//           @import "@/assets/scss/settings/_base.scss";
//         `,
//       },
//     },
//   },
// };
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
				@import "@/assets/scss/settings/_main.scss";
				`,
      },
    },
  },
};

// var Vue = require("vue");
// var VueScrollTo = require("vue-scrollto");

// Vue.use(VueScrollTo);

// // You can also pass in the default options
// Vue.use(VueScrollTo, {
//   container: "body",
//   duration: 500,
//   easing: "ease",
//   offset: 0,
//   force: true,
//   cancelable: true,
//   onStart: false,
//   onDone: false,
//   onCancel: false,
//   x: false,
//   y: true
// });
