<template>
  <component
    :is="as"
    class="font-extrabold text-[32px] leading-tight lg:text-5xl mb-6"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: 'H3Component',
  props: {
    as: {
      type: String,
      default: 'h3'
    }
  }
}
</script>
