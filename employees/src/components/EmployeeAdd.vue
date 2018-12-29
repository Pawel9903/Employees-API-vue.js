<template>
  <div>
    <h4>Dodawanie pracownika</h4>
  <employee-form :form="employee" :on-submit="onSubmit"></employee-form>
  </div>

</template>

<script>
  import employeeForm from './EmployeeForm';
  import alert from '../mixins/alerts';

  export default {
      name: "AddEmployee",
      components:{
          employeeForm
      },
      data(){
        return{
          employee:{
            name:'',
            surname:'',
            city:'',
            salary:'',
            email:'',
            phone:''
          }
        }
      },
      mixins:[alert],
      methods:{
          onSubmit(evt){
            evt.preventDefault();
            this.$store.dispatch('employees/SAVE_EMPLOYEE', this.employee);
            this.alert('Udało się dodać pracownika','success');
          }
      }

    }
</script>

<style scoped>

</style>
