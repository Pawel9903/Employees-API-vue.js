<template>
  <div>
    <h4>Rejestracja</h4>

    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="exampleInput1"
      >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Hasło:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Hasło">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Powtórz hasło:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="password"
                      v-model="form.confirmPassword"
                      required
                      placeholder="Powtórz hasło">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleGroup4">
      </b-form-group>
      <b-button type="submit" variant="primary">Zaloguj</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
          checked: []
        },
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
    }
  }
</script>

<!-- b-form-1.vue -->
