import Vue from 'vue';
import VueRouter from 'vue-router';
import vmodal from 'vue-js-modal';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import App from './App.vue';
import store from './store';
import router from './router/router';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);
Vue.use(vmodal);
Vue.use(VueRouter);

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount('#app');
