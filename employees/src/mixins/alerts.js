
export default {
  methods:{
    alert(message,variant) {
      this.$emit('alert',{ message:message, variant:variant });
    }
  }

}
