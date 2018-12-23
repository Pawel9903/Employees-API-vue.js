<template>
  <employee-form :form="employee" :on-submit="onSubmit"></employee-form>
</template>

<script>

  import alert from '../mixins/alerts';
  import confirmModal from '../mixins/confirmModal'
  import { bus } from '../main';
  import employeeForm from './EmployeeForm';

  export default {
    name: "EditEmployee",
    mixins:[ alert, confirmModal ],
    components:{
      employeeForm
    },
    data() {
      return{
        employee: {}
      }
    },
    created()
    {
      this.getEmployee(this.$route.params.id);
    },
    methods: {
      getEmployee(id){
        // this.items = this.$store.dispatch('employees/GET_EMPLOYEE',this.$route.params.id);
        this.$store.dispatch('employees/GET_EMPLOYEE',id);
        setTimeout(()=>{
          this.employee = this.$store.getters['employees/EMPLOYEES'];
        },100)
      },
      async onSubmit (evt) {
         // bus.$emit('showAlert', 1);
        // this.confirmModal('Czy na pewno chcesz edytować pracownika?');
        evt.preventDefault();
        await this.$store.dispatch('employees/UPDATE_EMPLOYEE',this.employee);
            this.alert('Udało się edytować pracownika','success');
      },
    }
  }
</script>

<!-- b-form-1.vue -->
