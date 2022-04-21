<template lang="pug">
component(:is='as' class='font-extrabold text-[32px] leading-semi-tight lg:text-5xl')
  slot
</template>

<script>
export default {
  name: 'H3Component',
  props: {
    as: {
      type: String,
      default: 'h3',
    },
  },
}
</script>
