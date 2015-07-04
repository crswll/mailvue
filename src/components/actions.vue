<style lang="scss">
  @import "src/styles/variables.scss";
  .actions {
    display: inline-block;
    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
</style>

<template>
  <ul class="actions">
    <li class="actions--action" v-repeat="actions" v-on="click: mark(action)">
      <icon icon="{{ icon }}"></icon>
      <span class="label">{{ label }}</span>
    </li>
  </ul>
</template>

<script>
  module.exports = {
    props: ['actions', 'messages'],
    methods: {
      mark: function (action) {
        this.messages.forEach(function (message) {
          action(message);
        });
      }
    }
  }
</script>
