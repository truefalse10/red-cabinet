import Vue from 'vue';
import VModal from 'vue-js-modal';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VModal);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
