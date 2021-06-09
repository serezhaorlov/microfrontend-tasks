import Vue from 'vue';
import Router from 'vue-router';
import Participation from '../Participation/Participation.vue';
import EventsList from '../EventsList/EventsList.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/participation',
      name: 'App',
      component: Participation,
    },
    {
      path: '/vue',
      name: 'EventsList',
      component: EventsList,
    },
  ],
});

export default router;
