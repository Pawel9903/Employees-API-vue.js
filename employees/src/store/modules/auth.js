import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const auth = {
  namespaced:true,
  state:{
    token: localStorage.getItem('user-token') || '',
    status: '',
  },
  getters:{
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  }
}
