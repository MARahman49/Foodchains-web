import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome';
import Carousel3d from 'vue-carousel-3d';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('icon', Icon);
Vue.use(Carousel3d);
Vue.prototype.axios = axios;

new Vue({
  render(h) { return h(App); },
}).$mount('#app');
