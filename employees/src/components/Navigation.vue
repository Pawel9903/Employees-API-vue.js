<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Katalog pracowników</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item v-show="isLoggedIn" :to="{name:'index'}">Strona główna</b-nav-item>
        <b-nav-item v-show="isLoggedIn" :to="{name:'employees'}">Lista Pracowników</b-nav-item>
        <b-nav-item v-show="!isLoggedIn" :to="{name:'login'}">Logowanie</b-nav-item>
        <b-nav-item v-show="!isLoggedIn" :to="{name:'register'}">Rejestracja</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--<b-nav-form>-->
          <!--&lt;!&ndash;<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>&ndash;&gt;-->
          <!--<b-button v-show="isLoggedIn" @click="logout" size="sm" class="my-2 my-sm-0" type="submit">Wyloguj</b-button>-->
        <!--</b-nav-form>-->

        <b-nav-item-dropdown v-show="isLoggedIn" text="Użytkownik" right>
          <b-nav-item class="c-list-nav" :to="{name:'register'}">Profil</b-nav-item>
          <b-nav-item class="c-list-nav" @click="logout" >Wyloguj</b-nav-item>
        </b-nav-item-dropdown>

        <!--<b-nav-item-dropdown right>-->
          <!--&lt;!&ndash; Using button-content slot &ndash;&gt;-->
          <!--<template slot="button-content">-->
            <!--<em>User</em>-->
          <!--</template>-->
          <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
          <!--<b-dropdown-item href="#">Signout</b-dropdown-item>-->
        <!--</b-nav-item-dropdown>-->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>

<script>


  export default {
        name: "Navigation",
      methods:{
          logout(evt) {
            evt.preventDefault();
            this.$store.dispatch('auth/logout');
          }
      },
      computed: {
        isLoggedIn() {
          return this.$store.getters['auth/isLoggedIn'];
        }
      },
      watch:{
        isLoggedIn () {
        }
      }
    }
</script>

<style scoped>
  .c-list-nav a{
    color: black !important;
  }
</style>
