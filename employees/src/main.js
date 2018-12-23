import Vue from 'vue'
import {store} from "./store/index";
import App from './components/Layout'
import router  from './routes'
// css files
import 'va/lib/css'
// js files
import 'va/lib/script'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.component('b-modal', bModal);
Vue.directive('b-modal', bModalDirective);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
