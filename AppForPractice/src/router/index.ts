import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import DataPage from '@/views/DataPageView.vue';
import PostDetailView from '@/views/PostDetailView.vue';
import ExampleView from '@/views/ExampleView.vue';
import TableView from '@/views/TableView.vue';
import BoxesView from '@/views/BoxesView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/data', name: 'DataPage', component: DataPage },
  { path: '/post/:id', name: 'PostDetail', component: PostDetailView, props: true },
  { path: '/example', name: 'Example', component: ExampleView },
  { path: '/table', name: 'Table', component: TableView },
  { path: '/boxes', name: 'Boxes', component: BoxesView },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
