import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuescroll from "vue-scroll";
import firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyB40yKdLO8n8TXBH8exnoaSAfpSOjsb8Ao",
  authDomain: "mycar-52e2a.firebaseapp.com",
  databaseURL: "https://mycar-52e2a-default-rtdb.firebaseio.com",
  projectId: "mycar-52e2a",
  storageBucket: "mycar-52e2a.appspot.com",
  messagingSenderId: "1006106944751",
  appId: "1:1006106944751:web:b4bb3647516217d517a71a"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuescroll,
  render: h => h(App)
}).$mount("#app");
