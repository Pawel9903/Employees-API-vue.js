import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index'
import Employees from './components/Employees'
import EditEmployee from "./components/EmployeeEdit";
import ShowEmployee from './components/EmployeeShow'
import AddEmployee from './components/EmployeeAdd'

Vue.use(VueRouter);

  const routes = [
    {
      path: '/home',
      name: 'index',
      component: Index,
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees,
    },
    {
      path: '/employees/edit/:id',
      name: 'editEmployees',
      component: EditEmployee,
      props: true
    },
    {
      path: '/employees/show/:id',
      name: 'showEmployee',
      component: ShowEmployee,
      props: true
    },
    {
      path: '/employees/add',
      name: 'addEmployee',
      component: AddEmployee,
      props: true
    }
  ];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router
