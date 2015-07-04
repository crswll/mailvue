<style lang="scss">
  @import "src/styles/variables.scss";
  .selected {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    text-align: center;
    background-color: $color--white;
    border-top: 1px solid $color--gray--light;
  }
</style>

<template>
  <div class="selected" v-transition="selected">
    {{ selected.length }} Selected
    <actions actions="{{ actions }}" messages="{{ selected }}"></actions>
  </div>
</template>

<script>
  module.exports = {
    props: ['selected'],
    data: function () {
      return {
        actions: [
          {
            label: 'Trash',
            icon: 'delete',
            action: function (message) {
              message.trash = true;
              message.selected = false;
            }
          },
          {
            label: 'Spam',
            icon: 'report',
            action: function (message) {
              message.spam = true;
              message.selected = false;
            }
          },
          {
            label: 'Unread',
            icon: 'mail',
            action: function (message) {
              message.read = false;
            }
          },
          {
            label: 'Read',
            icon: 'mail',
            action: function (message) {
              message.read = true;
            }
          },
          {
            label: 'Done',
            icon: 'close',
            action: function (message) {
              message.selected = false;
            }
          }
        ]
      };
    },
    methods: {
      mark: function (field, value) {
        this.selected.forEach(function (message) {
          message[field]= value;
        });
      }
    }
  }
</script>
