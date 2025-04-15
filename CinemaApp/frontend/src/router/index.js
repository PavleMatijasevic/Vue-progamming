import { createRouter, createWebHistory } from 'vue-router';
import FilmoviKomponenta from '../components/FilmoviKomponenta.vue';
import KupovinaKomponenta from '../components/KupovinaKomponenta.vue';
import LoginKomponenta from '../components/LoginKomponenta.vue';
import RegistracijaKomponenta from '../components/RegistracijaKomponenta.vue';
import KarteKomponenta from '../components/KarteKomponenta.vue';
import AdminPanelKomponenta from '../components/AdminPanelKomponenta.vue';
import PocetnaKomponenta from '@/components/PocetnaKomponenta.vue';


const routes = [
  { path: '/repertoar', component: FilmoviKomponenta },
  { path: '/kupovina/:id', component: KupovinaKomponenta },
  { path: '/login', component: LoginKomponenta},
  { path: '/registracija', component: RegistracijaKomponenta},
  { path: '/moje-karte', component: KarteKomponenta},
  { path: '/admin', component: AdminPanelKomponenta},
  { path: '/', component: PocetnaKomponenta}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
