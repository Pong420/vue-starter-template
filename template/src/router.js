import Vue from 'vue';
import Router from 'vue-router';

import ProgressBar from '@/components/ProgressBar.vue';

Vue.use(Router);

const progress = (Vue.prototype.$progress = new Vue(ProgressBar).$mount());
document.body.appendChild(progress.$el);

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});

router.beforeEach(() => {
  router.app.$progress.start();
});

export default router;
