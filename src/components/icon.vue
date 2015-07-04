<style lang="scss">
  @import "src/styles/variables.scss";
  .icon {
    width: 20px;
    height: 20px;
    fill: #000;
  }
</style>

<template>
  <svg class="icon icon-{{ icon }}">
    <use v-attr="use"></use>
  </svg>
</template>

<script>
  module.exports = {
    props: ['icon'],
    data: function () {
      return {
        use: {}
      }
    },
    compiled: function () {
      var icon = '#icon-' + this.icon;
      this.use = { 'xlink:href': icon };
    }
  }
</script>
