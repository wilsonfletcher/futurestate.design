<template>
  <component
    :is="as"
    class="font-black text-4xl leading-semi-tight lg:text-7xl"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h1'
    }
  }
}
</script>
