import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
import Env from './../../config/dev.env'

Vue.use(Vuex);

export const employees = {
  namespaced:true,
  state: {
    employees:null,
  },
  getters : {
    EMPLOYEES: state => {
      return state.employees;
    },
    GET_EMPLOYEE_BY_ID: state => (id) => {
      return state.employees.find(employee => employee.id === id)
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
      let { data } = await Axios.get(Env.ROOT_API+'employees/'+payload);
      context.commit('SET_EMPLOYEE',data);
    },
    GET_EMPLOYEES : async (context,payload) => {
      let { data } = await Axios.get(Env.ROOT_API+'employees');
      context.commit('SET_EMPLOYEE',data);
    },
    SAVE_EMPLOYEE : async (context,payload) => {
      let { data } = await Axios.post(Env.ROOT_API+'employees/{employee}',payload);
      context.commit('ADD_EMPLOYEE',payload);
    },
    UPDATE_EMPLOYEE : async (context, payload) => {
      let { data } = await  Axios.put(Env.ROOT_API+'employees/{employee}',payload);
      context.commit('ADD_EMPLOYEE',payload);
    },
    DELETE_EMPLOYEE : async (context, payload) => {
      let { data } = await Axios.delete(Env.ROOT_API+'api/employees/'+ payload);
    }
  }
};
