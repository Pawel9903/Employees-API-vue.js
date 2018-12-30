import Vue from 'vue'
import VueRouter from 'vue-router'
import {store} from "./store/index";

import Index from './components/Index'
import Employees from './components/Employees'
import EditEmployee from "./components/EmployeeEdit";
import ShowEmployee from './components/EmployeeShow'
import AddEmployee from './components/EmployeeAdd'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter);

  const routes = [
    {
      path: '/home',
      name: 'index',
      component: Index,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/employees/edit/:id',
      name: 'editEmployees',
      component: EditEmployee,
      props: true,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/employees/show/:id',
      name: 'showEmployee',
      component: ShowEmployee,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/employees/add',
      name: 'addEmployee',
      component: AddEmployee,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    }
  ];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next();
      return
    }
    next('/login')
  } else {
    next()
  }
});


export default router


