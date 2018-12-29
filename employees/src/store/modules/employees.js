import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex);

export const employees = {
  namespaced:true,
  state: {
    employees:null,
    token: localStorage.getItem('token') || '',
  },
  getters : {
    EMPLOYEES: state => {
      return state.employees;
    },
    GET_EMPLOYEE_BY_ID: state => (id) => {
      return state.employees.find(employee => employee.id === id)
    },
    TOKEN: state => {
      return state.token;
    },
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
      let { data } = await Axios.get('http://employees.vh/api/employees/'+payload,{ headers: {"Authorization" : `Bearer ${context.state.token}`}});
      context.commit('SET_EMPLOYEE',data);
    },
    GET_EMPLOYEES : async (context,payload) => {
      let { data } = await Axios.get('http://employees.vh/api/employees',{ headers: {"Authorization" : `Bearer ${context.state.token}`}});
      context.commit('SET_EMPLOYEE',data);
    },
    SAVE_EMPLOYEE : async (context,payload) => {
      let { data } = await Axios.post('http://employees.vh/api/employees/{employee}',payload,{ headers: {"Authorization" : `Bearer ${context.state.token}`}});
      context.commit('ADD_EMPLOYEE',payload);
    },
    UPDATE_EMPLOYEE : async (context, payload) => {
      let { data } = await  Axios.put('http://employees.vh/api/employees/{employee}',payload,{ headers: {"Authorization" : `Bearer ${context.state.token}`}});
      context.commit('ADD_EMPLOYEE',payload);
    },
    DELETE_EMPLOYEE : async (context, payload) => {
      let { data } = await Axios.delete('http://employees.vh/api/employees/'+ payload,{ headers: {"Authorization" : `Bearer ${context.state.token}`}});
    }
  }
};
