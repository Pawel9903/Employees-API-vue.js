<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="exampleInputGroup2"
                    label="Imię:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Imię">
        </b-form-input>
      </b-form-group>


      <b-form-group id="exampleInputGroup3"
                    label="Nazwisko:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.surname"
                      required
                      placeholder="Nazwisko">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup4"
                    label="Tel."
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="text"
                      v-model="form.phone"
                      required
                      placeholder="Tel.">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup5"
                    label="Zarobki"
                    label-for="exampleInput5">
        <b-form-input id="exampleInput5"
                      type="number"
                      v-model="form.salary"
                      required
                      placeholder="Zarobki">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup6"
                    label="Miasto"
                    label-for="exampleInput6">
        <b-form-input id="exampleInput6"
                      type="text"
                      v-model="form.city"
                      required
                      placeholder="Miasto">
        </b-form-input>
      </b-form-group>


      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Email"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "EditEmployee",
    data () {
      return {
        employee: this.$route.params.employee.item,
        headers: {
          headers: {
            'Content-Type': 'application/json'
            }
          },
        data: '',
        form: {
          id: this.$route.params.employee.item.id,
          email: '',
          name: '',
          surname: '',
          phone: '',
          salary: '',
          city: '',
        },
        foods: [
          { text: 'Select One', value: null },
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
        ],
        show: true
      }
    },
    mounted(){
      this.form.email = this.employee.email;
      this.form.name = this.employee.name;
      this.form.surname = this.employee.surname;
      this.form.phone = this.employee.phone;
      this.form.city = this.employee.city;
      this.form.salary = this.employee.salary;
      },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        axios.put('http://localhost/employees/public/api/employees/{employee}',this.form).then(response => {
          console.log(response)
        })
          .catch(error => {
            console.log(error.response)
          });
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = this.employee.email;
        this.form.name = this.employee.name;
        this.form.surname = this.employee.surname;
        this.form.phone = this.employee.phone;
        this.form.city = this.employee.city;
        this.form.salary = this.employee.salary;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      }
    }
  }
</script>

<!-- b-form-1.vue -->
