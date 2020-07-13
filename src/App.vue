<template>
  <div id="app">

    <moor-hello-world :color="color" />

    <three-level-city v-model="value" @chang-district="changDistrict" />
    <three-demo />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // HelloWorld
      value: '9,11,0',
      msg: 'Welcome to moor UI!',
      color: 'red'

    }
  },

  methods: {
    changDistrict(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">

</style>
