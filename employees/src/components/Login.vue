<template>
  <div>
    <h4>Logowanie</h4>

    <b-form @submit="onSubmit">
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
      <b-form-group id="exampleGroup4">
      </b-form-group>
      <b-button type="submit" variant="primary">Zaloguj</b-button>
    </b-form>
  </div>
</template>

<script>
  import alert from '../mixins/alerts';

  export default {
    mixins:[ alert ],
    data () {
      return {
        user: {
          email: '',
          password: '',
        },
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        this.$store.dispatch('auth/login', this.user).then(()  => {
          setTimeout(() => {
              if(this.$store.getters['auth/isLoggedIn']) {
                this.$store.commit('user/SET_USER', this.user);
                this.$router.push("/home");
                this.alert('Witaj, '+this.user.email+'!','success');
              }else{
                this.alert('Nieprawidłowy email lub hasło!','danger');
              }
            }, 300)
        })
      },
    }
  }
</script>

<!-- b-form-1.vue -->
