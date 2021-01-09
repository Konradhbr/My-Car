import Vue from "vue";
import VueRouter from "vue-router";

const homePage = () =>
  import("@/components/HomePage/HomePage.vue").then(m => m.default || m);
const calculators = () =>
  import("@/components/Calculators/Calculators.vue").then(m => m.default || m);
const dashboard = () =>
  import("@/components/UserPanel/Dashboard.vue").then(m => m.default || m);
// const news = () =>
//   import("@/components/HomePage/News.vue").then(m => m.default || m);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage
  },
  {
    path: "/Calculators",
    name: "Calculators",
    component: calculators
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: dashboard
  }
  // {
  //   path: "/Home",
  //   name: "News",
  //   component: news
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
