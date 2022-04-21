<template lang="pug">
component(:is='as' class='font-extrabold text-[40px] leading-tight lg:text-6xl')
  slot
</template>

<script>
export default {
  name: 'H2Component',
  props: {
    as: {
      type: String,
      default: 'h2',
    },
  },
}
</script>
