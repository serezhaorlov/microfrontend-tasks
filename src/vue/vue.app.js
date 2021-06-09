import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from '../vue/routes/routes';

const vueLifecycles = singleSpaVue({
  Vue: Vue.extend({ router }),
  appOptions: {
    el: '#vue',
    render: (r) => r(App),
  },
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
