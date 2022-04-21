<template>
  <component
    v-bind:is="as"
    class="font-bold text-base leading-tight lg:text-xl">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h6',
    },
  },
}
</script>
