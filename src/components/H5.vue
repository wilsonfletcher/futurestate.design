<template>
  <component
    v-bind:is="as"
    class="font-bold text-xl leading-tight lg:text-[28px]">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h5'
    }
  }
}
</script>
