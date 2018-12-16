import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex);

export const employees = {
  namespaced:true,
  state: {
    employees:null
  },
  getters : {
    EMPLOYEES: state => {
      return state.employees;
    }
  },
  mutations: {
    SET_EMPLOYEE: (state,payload) => {
      state.employees = payload
    },
    ADD_EMPLOYEE: (state,payload) => {
      state.employees = payload;
    }
  },
  actions : {
    GET_EMPLOYEE : async (context,payload) => {
      let { data } = await Axios.get('http://employees.vh/api/employees');
      context.commit('SET_EMPLOYEE',data);
    },
    SAVE_EMPLOYEE : async (context,payload) => {
      let { data } = await Axios.post('http://employees.vh/api/employees/{employee}',payload);
      context.commit('ADD_EMPLOYEE',payload);
    },
    UPDATE_EMPLOYEE : async (context, payload) => {
      let { data } = await  Axios.put('http://employees.vh/api/employees/{employee}',payload);
      context.commit('ADD_EMPLOYEE',payload);
    }
  }
};