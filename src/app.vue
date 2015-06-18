<template>
  <h1>Kiosk</h1>
  <component is="nav"></component>
  <component is="{{ route }}" transition-mode="out-in"></div>
</template>

<style lang="scss">
  @import "src/styles/variables";
  @import "src/styles/sanitize";
  @import "src/styles/transitions";
</style>

<script>
  module.exports = {
    data: {
      route: ''
    },
    components: {
      "home": require('./components/home.vue'),
      "about": require('./components/about.vue'),
      "nav": require('./components/nav.vue')
    }
  }
</script>
