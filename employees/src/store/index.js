import {employees} from './modules/employees'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    employees:employees,
  }
});
