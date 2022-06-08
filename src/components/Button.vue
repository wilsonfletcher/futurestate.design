<template>
  <component :is="as" class="button" :class="`button--${kind}`">
    <slot>{text}</slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    as: {
      type: String,
      default: 'button'
    },
    kind: {
      type: String,
      default: 'black',
      validator: (value) => {
        const validColor = ['yellow', 'black', 'transparent']
        return validColor.includes(value)
      }
    },
    text: {
      type: String,
      default: 'Button'
    }
  },
  // computed: {
  //   btnClass() {
  //     const classes = []

  //     if (this.kind === 'primary') {
  //       classes.push('text-yellow border-current')
  //     } else if (this.kind === 'secondary') {
  //       classes.push('text-white border-current')
  //     } else if (this.kind === 'tertiary') {
  //       classes.push('text-black border-current')
  //     }

  //     return classes.join(' ')
  //   }
  // }
})
</script>

<style lang="postcss">
.button {
  @apply relative inline-block border-4 border-transparent py-2 px-3 lg:px-7 font-bold leading-[32px] text-base lg:text-xl transition-colors;

  &[aria-current='page'] {
    &::after {
      @apply bg-black content-[''] block absolute -right-[4px] -bottom-[4px] -left-[4px] h-[4px];
    }
  }

  &--black {
    @apply border-black text-black;

    &:hover {
      @apply bg-black text-white;
    }
  }

  &--yellow {
    @apply border-current text-yellow;

    &:hover {
      @apply bg-yellow text-black;
    }
  }
}
</style>
