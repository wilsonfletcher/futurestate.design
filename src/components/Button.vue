<template>
  <component v-bind:is="as" class="button" :class="btnClass">
    <slot>{text}</slot>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    as: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      values: ['primary', 'secondary']
      // default: 'primary',
    },
    text: {
      type: String,
      default: 'Button'
    }
  },
  computed: {
    btnClass() {
      const classes = []

      if (this.type === 'primary') {
        classes.push('text-black border-black ')
      } else if (this.type === 'secondary') {
        classes.push('text-white border-current')
      }

      return classes.join(' ')
    }
  }
}
</script>

<style lang="postcss">
.button[aria-current='page'] {
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4px;
    right: -4px;
    left: -4px;
    height: 4px;
    background: #fff;
  }
}
</style>
