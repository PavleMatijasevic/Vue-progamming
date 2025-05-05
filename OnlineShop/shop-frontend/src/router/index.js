import { createRouter, createWebHistory } from 'vue-router';
import Pocetna from '../components/Pocetna.vue';
import Proizvodi from '../components/Proizvodi.vue';
import DodajProizvod from '../components/DodajProizvod.vue'
import Korpa from '../components/Korpa.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';


const routes = [
  { path: '/', component: Pocetna },
  { path: '/kategorija/:id', component: Proizvodi },
  {
    path: '/admin/dodaj-proizvod',
    name: 'DodajProizvod',
    component: DodajProizvod,
    meta: { requiresAdmin: true }
  },
  { path: '/korpa', component: Korpa },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registracija',
    name: 'Register',
    component: Register
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    const korisnik = JSON.parse(localStorage.getItem('korisnik'));
    if (to.meta.requiresAdmin && (!korisnik || korisnik.uloga !== 'admin')) {
      alert('Pristup dozvoljen samo administratorima.');
      next('/');
    } else {
      next();
    }
  });
export default router;
