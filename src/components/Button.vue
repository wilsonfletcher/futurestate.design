<template>
  <component :is="as" class="button" :class="btnClass">
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
      default: 'none',
      validator: (value) => {
        const validColor = ['primary', 'secondary', 'teritary', 'none']
        return validColor.includes(value)
      }
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
        classes.push('text-yellow border-current')
      } else if (this.type === 'secondary') {
        classes.push('text-white border-current')
      } else if (this.type === 'tertiary') {
        classes.push('text-black border-current')
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
