<template>
  <div>
    <h4>Pracownik</h4>

    <b-card >
      <h4 slot="header">{{employee.name+' '+employee.surname}}</h4>

      <b-list-group flush>
        <b-list-group-item>Email: {{ employee.email }}</b-list-group-item>
        <b-list-group-item>Tel: {{ employee.phone }}</b-list-group-item>
        <b-list-group-item>Miasto: {{ employee.city }}</b-list-group-item>
        <b-list-group-item>Zarobki: {{ employee.salary }}zł</b-list-group-item>
      </b-list-group>
      <!--<b-card-body>-->
        <!--<a href="#"-->
           <!--class="card-link">Card link</a>-->
        <!--<a href="#"-->
           <!--class="card-link">Another link</a>-->
      <!--</b-card-body>-->
      <!--<b-card-footer>This is a footer</b-card-footer>-->
      <!--<b-card-img src="https://placekitten.com/480/210"-->
                  <!--alt="Image"-->
                  <!--bottom></b-card-img>-->
    </b-card>
  </div>

  <!-- card-kitchen-1.vue -->
</template>

<script>
  let employee = {
    name: '',
    surname:'',
    city:'',
    email:'',
    salary:'',
    phone:''
  };
    export default {
        name: "EmployeeShow",
      data(){
          return{
            employee:employee
          }
      },
      created()
      {
        this.getEmployee(this.$route.params.id);
      },
      methods:{
        getEmployee(id){
          // this.items = this.$store.dispatch('employees/GET_EMPLOYEE',this.$route.params.id);
          this.$store.dispatch('employees/GET_EMPLOYEE',id);
          setTimeout(()=>{
            this.employee = this.$store.getters['employees/EMPLOYEES'];
          },300)
        },
      }
    }
</script>

<style scoped>

</style>
