import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import FeaturePage from '../components/FeaturePage.vue';
import ProductList from '../components/ProductList.vue';
import ContactUs from '../components/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/features', component: FeaturePage },
  { path: '/products', component: ProductList },
  { path: '/contact', component: ContactUs },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
