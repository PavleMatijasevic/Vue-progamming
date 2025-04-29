import { createRouter, createWebHistory } from 'vue-router';
import Pocetna from '../components/Pocetna.vue';
import Proizvodi from '../components/Proizvodi.vue';

const routes = [
  { path: '/', component: Pocetna },
  { path: '/kategorija/:id', component: Proizvodi }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
