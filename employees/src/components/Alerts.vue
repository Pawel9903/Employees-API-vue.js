<template>
  <div>
    <b-alert :show="showAlert"
             dismissible
             fade
             :variant="variant"
    >
      {{ message }}
    </b-alert>
    <p v-model="message" ></p>
  </div>
</template>

<script>

  export default {
    name:'Alerts',
      props: {
        showAlert: {
          type: Boolean,
          default: false
        },
        message:{
          type: String,
          default: ''
        },
        variant:{
          type: String,
          default: ''
        }
      }
  }
</script>

<!-- alert-fade-1.vue -->
