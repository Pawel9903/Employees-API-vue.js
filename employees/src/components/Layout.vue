<template>
  <b-container>
    <div id="app">
      <h2>Katalog pracowników</h2>
      <NavMenu></NavMenu>

      <router-view></router-view>

    </div>
  </b-container>
</template>

<script>
  import NavMenu from './Navigation'
    export default {
      name: 'Layout',
      components:{
        NavMenu,
      }
    }

</script>



<style lang="scss">
  @import '../assets/scss/custom';
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
