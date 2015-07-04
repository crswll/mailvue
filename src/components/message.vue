<style lang="scss">
  @import "src/styles/variables.scss";
  .message__subject {
    font-size: 2em;
  }
  .message__from {
    color: $color--gray--dark;
    font-weight: normal;
  }
  .message__header {
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid $color--gray--light;
  }
</style>

<template>
  <div class="message">
    <header class="message__header">
      <h1 class="message__subject">{{ message.subject }}</h1>
      <h2 class="message__from">
        From
        <a href="mailto:{{ message.from }}">{{ message.name }}</a>
        on
        {{ message.received | moment 'format' 'dddd, MMMM Do YYYY \a\t h:mm:ssa' }}
      </h2>
    </header>
    <section class="message__body">
      {{ message.message }}
    </section>
    <footer class="message__footer">
      <ul class="labels">
        <li v-repeat="labels">{{ name }}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
  var moment = require('moment');

  module.exports = {
    props: ['message']
  }
</script>
