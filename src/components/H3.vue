<template>
  <component
    v-bind:is="as"
    class="font-extrabold text-[32px] leading-semi-tight lg:text-5xl">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h3'
    }
  }
}
</script>
