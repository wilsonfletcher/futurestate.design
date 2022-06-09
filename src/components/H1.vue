<template>
  <component
    :is="as"
    class="font-black text-4xl leading-[1.2] lg:text-7xl mb-6"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  props: {
    as: {
      type: String,
      default: 'h1'
    }
  }
}
</script>
