<template>
  <b-container>
    <div id="app">
      <!--<h2>Katalog pracowników</h2>-->
      <NavMenu></NavMenu>
      <alerts :message="alertMessage.message" :variant="alertMessage.variant" :show-alert="alertMessage.showAlert" ></alerts>
      <router-view @alert="alert" @confirmModal="confirmModal"></router-view>
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
          },
          modal:{
            showModal:0,
            modalMessage:''
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
          this.alertMessage.showAlert = 1;

          setTimeout(()=>{
            this.alertMessage.message = '';
            this.alertMessage.variant = '';
            this.alertMessage.showAlert = 0;
          },7000)
        },
        confirmModal(value){
          this.modal.modalMessage = value.message;
          this.modal.showModal = 1;
        }
      }
    }

</script>

<style lang="scss">
  @import '../assets/scss/custom';
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
