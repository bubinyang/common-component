<template>
  <h1 :style="{color: color}"> {{ msg }}</h1>
</template>

<script>
export default {
  name: 'MoorHelloWorld',
  props: {
    color: {
      type: String,
      default: 'pink'
    },
    msg: {
      type: String,
      default: 'Hello World!!!!!!s'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">

</style>

