<template>
  <div>
  <b-form @submit="onSubmit">

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
  </b-form>
  </div>
</template>

<script>
  import { validationMixin } from "vuelidate"
  import { required, minLength } from "vuelidate/lib/validators"

    export default {
      name: "EmployeeForm",
      mixins: [validationMixin],
      props:{
          form:{
            name:{
              type:String,
              default:''
            },
            surname:{
              type:String,
              default:''
            },
            phone:{
              type:Number,
              default:''
            },
            salary:{
              type:Number,
              default:''
            },
            city:{
              type:String,
              default:''
            },
            email:{
              type:String,
              default:''
            }
          },
        onSubmit:Function,
      }
      // validations: {
      //   form: {
      //     name:{
      //       type:String,
      //       default:''
      //     },
      //     surname:{
      //       type:String,
      //       default:''
      //     },
      //     phone:{
      //       type:Number,
      //       default:''
      //     },
      //     salary:{
      //       type:Number,
      //       default:''
      //     },
      //     city:{
      //       type:String,
      //       default:''
      //     },
      //     email:{
      //       type:String,
      //       default:''
      //     }
      //   },
      
    }
</script>

<style scoped>

</style>
