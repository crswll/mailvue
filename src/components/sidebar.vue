<style lang="scss">
  @import "src/styles/variables.scss";
  .label {
    vertical-align: middle;
    line-height: 20px;
  }

  .label__icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 0.1em;
    border-radius: 5px;
  }

  .menu {
    &__header {
      text-transform: uppercase;
    }
    &__item {
      margin: 0;
    }
    &__item__link {
      padding: 0.3em;
      display: block;
      color: $color--black;
      &:hover {
        background-color: #eee;
      }
      &--active {
        font-weight: bold;
        background-color: #eee;
      }
    }
  }

</style>

<template>
  <button class="button button--compose" v-on="click:newMessage()">Compose</button>
  <section class="menu menu--mailbox">
    <h1 class="menu__header">Mailbox</h1>
    <ul class="menu__list">
      <li class="menu__item"><a class="menu__item__link menu__item__link--active" href="#">Inbox ({{ unreadMessages.length}})</a></li>
      <li class="menu__item"><a class="menu__item__link" href="#">Important</a></li>
      <li class="menu__item"><a class="menu__item__link" href="#">Sent</a></li>
      <li class="menu__item"><a class="menu__item__link" href="#">Drafts</a></li>
    </ul>
  </section>
  <section class="menu menu--labels">
    <h1 class="menu__header">Labels</h1>
    <ul class="menu__list">
      <li class="menu__item menu__item--label" v-repeat="labels">
        <span class="label__icon" v-style="background-color: color"></span>
        {{ name }}
      </li>
    </ul>
  </section>
</template>

<script>
  var moment = require('moment');

  module.exports = {
    props: ['messages', 'labels'],
    compiled: function () {

    },
    computed: {
      unreadMessages: function () {
        return this.messages.filter(function (message) {
          return !message.read && !message.spam && !message.trash;
        });
      }
    }
  }
</script>
