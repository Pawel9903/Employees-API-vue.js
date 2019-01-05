<template>
  <div>
    <h4>Rejestracja</h4>

    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup0"
                    label="Imię:"
                    label-for="exampleInput0"
      >
        <b-form-input id="exampleInput0"
                      type="text"
                      v-model="user.name"
                      required
                      placeholder="Imię">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="exampleInput1"
      >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="user.email"
                      required
                      placeholder="Email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Hasło:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="user.password"
                      required
                      placeholder="Hasło">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Powtórz hasło:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="password"
                      v-model="user.confirmPassword"
                      required
                      placeholder="Powtórz hasło">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleGroup4">
      </b-form-group>
      <b-button type="submit" variant="primary">Zarejestruj</b-button>
    </b-form>
  </div>
</template>

<script>

  import alert from '../mixins/alerts'

  export default {
    mixins:[alert],
    data () {
      return {
        user: {
          name:'',
          email: '',
          password: '',
          confirmPassword: '',
        },
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
          let status = this.$store.dispatch('auth/register', this.user);
            if(status) {
              this.$router.push('/login');
              this.alert('Udało się dodać użytkownika '+this.user.name+' !','success');
            }else {
              this.alert('Nie udało się dodać użytkownika!','danger');
            }
      },
    }
  }
</script>

<!-- b-form-1.vue -->
