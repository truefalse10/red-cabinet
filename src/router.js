import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Concerts from './views/Concerts.vue';
import About from './views/About.vue';
import Cabinet from './views/Cabinet.vue';
import Imprint from '@/views/Imprint';
import Faq from '@/views/Faq';
import Privacy from '@/views/Privacy';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/concerts',
      name: 'concerts',
      component: Concerts,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/cabinet',
      name: 'Cabinet',
      component: Cabinet,
    },
    {
      path: '/imprint',
      name: 'Imprint',
      component: Imprint,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: Faq,
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: Privacy,
    },
  ],
});
