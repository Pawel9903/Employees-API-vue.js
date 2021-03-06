import {employees} from './modules/employees'
import {user} from './modules/user'
import {auth} from './modules/auth'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    employees:employees,
    user:user,
    auth:auth
  }
});
