<style lang="scss">

  @import "src/styles/variables";
  @import "src/styles/sanitize";
  @import "src/styles/transitions";
  @import "src/styles/buttons";

  .mailbox {
    display: flex;
  }

  .pane {
    flex: 1;
    height: 100vh;
    overflow: auto;
    border-right: 1px solid $color--gray--light;
    &:last-child {
      border-right-width: 0;
    }
  }

  .pane--sidebar {
    max-width: 180px;
  }

  .pane--messages {
    flex: 1.2;
  }

  .pane--message {
    flex: 2;
  }

</style>

<template>
  <div id="mailbox" class="mailbox" v-class="mailbox--select: selectedMessages.length">
    <nav class="pane pane--sidebar" role="navigation">
      <sidebar messages="{{ messages }}" labels="{{ labels }}"></sidebar>
    </nav>
    <div class="pane pane--messages">
      <selected v-transition="slide" v-if="selectedMessages.length" selected="{{ selectedMessages }}"></selected>
      <preview v-repeat="inboxMessages | orderBy 'received' -1" track-by="id"></preview>
    </div>
    <div class="pane pane--message">
      <message v-if="message" message="{{ message }}"></message>
    </div>
  </div>
</template>

<script>

  module.exports = {
    data: {
      route: '',
      messages: require('../data/messages.json'),
      message: false,
      labels: [
        { name: "Personal", color: '#d5641c' },
        { name: "Work", color: '#003366' },
        { name: "Travel", color: '#7fbb00' },
        { name: "Amazon", color: '#146eb4' },
        { name: "Netflix", color: '#e50914' }
      ]
    },
    compiled: function () {
      this.readTimeout = null;
    },
    computed: {
      selectedMessages: function () {
        return this.messages.filter(function (message) {
          return message.selected;
        });
      },
      inboxMessages: function () {
        return this.messages.filter(function (message) {
          return !message.trash && !message.spam;
        });
      }
    },
    beforeCompile: function () {
      this.messages.forEach(function (message) {
        var hue = message.name.slice(0, 1).toLowerCase().charCodeAt() * 45;
        message.color = 'hsl(hue, 50%, 50%)'.replace('hue', hue);
      });
    },
    created: function () {
      this.message = this.messages[0];
    },
    watch: {
      message: function (message) {
        var vm = this;
        clearTimeout(vm.readTimeout);
        vm.readTimeout = setTimeout(function () {
          message.read = true;
        }, 1000);
      }
    },
    components: {
      message: require('./components/message.vue'),
      preview: require('./components/preview.vue'),
      sidebar: require('./components/sidebar.vue'),
      selected: require('./components/selected.vue'),
      actions: require('./components/actions.vue'),
      icon: require('./components/icon.vue')
    },
    filters: {
      moment: require('./filters/moment.js')
    }
  }
</script>
