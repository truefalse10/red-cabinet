import Vue from 'vue';
import VModal from 'vue-js-modal';

import App from './App.vue';
import AppButton from './components/AppButton';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VModal);
Vue.component('app-button', AppButton);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
