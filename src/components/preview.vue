<style lang="scss">

  @import "src/styles/variables.scss";

  .preview {
    border-left: 5px solid transparent;
    transition: all 0.25s;
    padding: 0.5em 0 0.5em 85px;
    position: relative;
    border-bottom: 1px solid $color--gray--light;

    &:last-child {
      border-bottom-width: 0;
    }

    &--selected {
      border-left-color: $color--blue;
    }

    &--unread {
      border-left-color: $color--blue;
    }

    &--reading {
      background-color: lighten($color--gray--light, 20%);
    }

    &__checkbox {
      position: absolute;
      opacity: 0;
      border: 1px solid orange;
    }

    &__avatar {
      position: absolute;
      border-radius: 50%;
      left: 10px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-weight: bold;
      outline: none;
      &:before {
        content: '';
        border-radius: 50%;
        font-size: 1.3em;
        width: 100%;
        height: 100%;
        background-color: $color--gray--light;
        position: absolute;
        left: 0;
        top: 0;
        transition: opacity 0.3s;
        opacity: 0;
        .mailbox--select & {
          opacity: 1;
        }
        .preview--selected & {
          content: '✓';
        }
      }
    }

    &__name {
      color: #777;
      text-transform: uppercase;
      font-size: 0.8em;
    }

    &__message {
      font-size: 0.8em;
    }

    &__subject {
      font-weight: bold;
      .preview--read & {
        font-weight: normal;
      }
    }

    &__labels {
      display: flex;
      list-style: none;
    }

    &__label {
      flex: 1;
    }

    &__received {
      color: $color--gray--light;
    }
  }
</style>

<template>
  <div v-on="click: open(this, $event)" class="preview" v-class="preview--selected: selected, preview--unread: !read, preview--reading: id === $root.message.id">
    <button v-on="click: selected = !selected" class="preview__avatar" v-style="background-color: color" unselectable>
      {{ name | firstLetter }}
    </button>
    <h1 class="preview__name">{{ name }}</h1>
    <h2 class="preview__subject">{{ subject }}</h2>
    <p class="preview__message">{{ message | truncate 10 }}</p>
    <div class="preview__received"><small>{{ received | moment 'fromNow' }}</small></div>
    <ul class="preview__labels">
      <li class="preview__label" v-repeat="labels">{{ $value }}</li>
    </ul>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      open: function (message, event) {
        var el = event.target;
        console.log(el);
        if (!el.classList.contains('preview__avatar')) {
          this.$root.message = message;
        }
      }
    },
    filters: {
      truncate: function (value, length) {
        return value.split(' ').slice(0, length).join(' ');
      },
      firstLetter: function (value) {
        return value.slice(0, 1);
      }
    }
  }
</script>
