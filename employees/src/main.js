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


Vue.use(BootstrapVue);

import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

Vue.component('b-modal', bModal);
Vue.directive('b-modal', bModalDirective);

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios);

//components
import Employees from './components/Employees'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
