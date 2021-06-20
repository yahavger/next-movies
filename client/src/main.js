import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLazyload from 'vue-lazyload';
import vmodal from 'vue-js-modal';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import App from './App.vue';
import store from './store';
import router from './router/router';

const loadimage = require('./assets/loading.gif');

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);
Vue.use(vmodal);
Vue.use(VueRouter);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1,
});

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount('#app');
