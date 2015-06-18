<style lang="scss">
  @import "src/styles/variables.scss";
</style>

<template>
  <div class="page page--home" v-transition="page">
    <h2>Home</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello from `./components/home.vue`.',
        items: []
      }
    }
  }
</script>
