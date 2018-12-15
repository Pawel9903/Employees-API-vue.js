<template>
  <div>

    <b-alert :show="dismissCountDown"
             dismissible
             fade
             :variant="variant"
             @dismissed="dismissCountDown=0">
      {{ message}}
    </b-alert>
  </div>
</template>

<script>
  import supportData from "../mixins/supportData";
  import alerts from "../mixins/alerts";

  export default {
    name:'Alerts',
    mixins:[supportData,alerts],
    data () {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        message:'',
        variant:''
      }
    },
    methods:{
      showAlert(message, variant) {
        this.dismissCountDown = 1;
        this.message = message;
        this.variant = variant
      }
    }
  }
</script>

<!-- alert-fade-1.vue -->
