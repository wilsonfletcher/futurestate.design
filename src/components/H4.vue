<template>
  <component
    v-bind:is="as"
    class="font-extrabold text-2xl leading-semi-tight lg:text-4xl">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h4'
    }
  }
}
</script>
