<template>
  <component
    :is="as"
    class="font-extrabold text-2xl leading-[1.2] lg:text-4xl mb-3"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    as: {
      type: String,
      default: 'h4'
    }
  }
})
</script>
