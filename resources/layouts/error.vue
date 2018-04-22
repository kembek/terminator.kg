<template />

<script>
export default {
  props: ['error'],
  created() {
    this.$router.push('/error/' + this.$props.error.statusCode)
  }
}
</script>
