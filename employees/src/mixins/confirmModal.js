export default {
  methods:{
    confirmModal(message) {
      this.$emit('confirmModal',{ message:message });
    }
  }
}
