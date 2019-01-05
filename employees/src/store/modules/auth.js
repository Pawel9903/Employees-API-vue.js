import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";
import Env from './../../config/dev.env'

Vue.use(Vuex);

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const auth = {
  namespaced:true,
  state: {
    isLoggedIn: !!localStorage.getItem("token")
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  mutations: {
    [LOGIN](state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    },
  },
    actions: {
      async login( context,payload) {
        try{
          context.commit(LOGIN); // show spinner
          let {data} = await Axios.post(Env.ROOT_API+'auth/login', payload);
          if(data)
            setTimeout(() => {
              localStorage.setItem('token', data.token);
              Axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
              context.commit(LOGIN_SUCCESS);
            }, 300);
        }catch (e) {

        }
        
      },
      async register(context, payload){
        try{
          let {data} = await Axios.post(Env.ROOT_API+'auth/register', payload).then(()=>{
            if(data.status === "success"){
              return true;
            }else {
              return false;
            }
        })
        }catch (e) {

        }
      },
      logout({ commit }) {
        localStorage.removeItem("token");
        commit(LOGOUT);
      }
    }
};
