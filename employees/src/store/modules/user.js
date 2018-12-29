import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex);

export const user = {
  namespaced: true,
  state: {
    user,
    token: localStorage.getItem('token') || '',
  },
  mutations: {},
  getters: {},
  actions: {
    LOGIN: async (context, payload) => {
      let {data} = await Axios.post('http://employees.vh/api/auth/login', payload);
      localStorage.setItem('token', data.token);
    }
  }
}
