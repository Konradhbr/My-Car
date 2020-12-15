import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/components/HomePage/HomePage.vue';
import Calculators from '@/components/Calculators/Calculators.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/Calculators',
    name: 'Calculators',
    component: Calculators,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
