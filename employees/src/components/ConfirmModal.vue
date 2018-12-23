<template>
    <!--<b-btn v-b-modal.modal1>Launch demo modal</b-btn>-->
<div>
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
          },
          message:{
              type:String,
          }
      },
      methods: {
        showModal () {
          this.$refs.myModalRef.show()
        },
        hideModal () {
          this.$refs.myModalRef.hide()
        }
      }
    }
</script>

<style scoped>

</style>
