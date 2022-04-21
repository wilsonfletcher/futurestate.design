<template lang="pug">
component(:is='as' class='font-bold text-xl leading-tight lg:text-[28px]')
  slot
</template>

<script>
export default {
  name: 'H5Component',
  props: {
    as: {
      type: String,
      default: 'h5',
    },
  },
}
</script>
