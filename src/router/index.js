import Vue from 'vue';
import VueRouter from 'vue-router';

const homePage = () =>
  import('@/components/HomePage/HomePage.vue').then((m) => m.default || m);
const calculators = () =>
  import('@/components/Calculators/Calculators.vue').then(
    (m) => m.default || m
  );
const dashboard = () =>
  import('@/components/UserPanel/Dashboard.vue').then((m) => m.default || m);
const carInfo = () =>
  import('@/components/UserPanel/CarInfo.vue').then((m) => m.default || m);
const service = () =>
  import('@/components/UserPanel/Service.vue').then((m) => m.default || m);
const fuelConsumption = () =>
  import('@/components/UserPanel/FuelConsumption.vue').then(
    (m) => m.default || m
  );
const chat = () =>
  import('@/components/UserPanel/Chat.vue').then((m) => m.default || m);
const setPassword = () =>
  import('@/components/Modals/ModalSetNewPassword.vue').then(
    (m) => m.default || m
  );
const news = () =>
  import('@/components/HomePage/News.vue').then((m) => m.default || m);

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage,
  },
  {
    path: '/Calculators',
    name: 'Calculators',
    component: calculators,
  },
  {
    path: '/SetNewPassword',
    name: 'NewPassword',
    component: setPassword,
  },
  {
    path: '/News',
    name: 'News',
    component: news,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: dashboard,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'CarInfo',
        name: 'Dashboard-CarInfo',
        component: carInfo,
      },
      {
        path: 'Service',
        name: 'Dashboard-Service',
        component: service,
      },
      {
        path: 'FuelConsumption',
        name: 'Dashboard-FuelConsumption',
        component: fuelConsumption,
      },
      {
        path: 'Chat',
        name: 'Dashboard-chat',
        component: chat,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
