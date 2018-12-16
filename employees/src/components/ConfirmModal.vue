<template>
  <div>
    <!--<b-btn v-b-modal.modal1>Launch demo modal</b-btn>-->

    <!-- Modal Component -->
    <b-modal v-model="show" id="modal1" title="Bootstrap-Vue">
      <p class="my-4">{{ message }}</p>
    </b-modal>
  </div>

  <!-- modal-1.vue -->
</template>

<script>
    export default {
      name: "ConfirmModal",
      props:{
          show:{
            type:Number,
            default: 0,
          },
          message:{
              type:String,
              default: ''
          }
      }
    }
</script>

<style scoped>

</style>
