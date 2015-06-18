<template>
  <div class="page page--about" v-transition="page">
    <h2>About</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello from `./components/about.vue`.'
      }
    }
  }
</script>
