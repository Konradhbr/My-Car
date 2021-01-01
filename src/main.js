import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuescroll from "vue-scroll";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuescroll,
  render: h => h(App)
}).$mount("#app");
