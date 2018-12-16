<template>
  <b-container>
    <div id="app">
      <h2>Katalog pracowników</h2>
      <NavMenu></NavMenu>
      <alerts :message="alertMessage.message" :variant="alertMessage.variant" show-alert="alertMessage.showAlert" ></alerts>
      <router-view @alert="alert" ></router-view>
    </div>
  </b-container>
</template>

<script>
  import NavMenu from './Navigation';
  import Alerts from './Alerts';
    export default {
      name: 'Layout',
      data(){
        return {
          alertMessage:{
            showAlert : 0,
            message:'',
            variant:''
          }
        }
      },
      components:{
        Alerts,
        NavMenu,
      },
      methods:{
        alert(value) {
          this.alertMessage.message = value.message;
          this.alertMessage.variant = value.variant;
          this.alertMessage.showAlert = true;

          setTimeout(()=>{
            this.alertMessage.message = '';
            this.alertMessage.variant = '';
            this.alertMessage.showAlert = false;
          },5000)
        },
      }
    }

</script>

<style lang="scss">
  @import '../assets/scss/custom';
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
