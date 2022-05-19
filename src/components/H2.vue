<template>
  <component
    :is="as"
    class="font-extrabold text-[40px] leading-tight lg:text-6xl"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'h2'
    }
  }
}
</script>
