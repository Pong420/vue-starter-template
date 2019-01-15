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
  ],
  scrollBehavior(to) {
    if (to.matched.some(t => t.meta.keep_alive)) {
      if (to.meta.saved_position) {
        return to.meta.saved_position;
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (from.meta.keep_alive) {
    from.meta.saved_position = { x: window.pageXOffset, y: window.pageYOffset };
  }

  router.app.$progress.start();

  next();
});

export default router;
