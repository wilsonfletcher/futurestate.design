<template>
  <nav :aria-label="nav.name">
    <ul class="flex lg:gap-5">
      <li v-for="item in nav.items" :key="item.id">
        <Button as="a" class="text-white" :href="item.url">{{
          item.name
        }}</Button>
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from '../Button.vue'
export default {
  components: {
    Button
  },
  name: 'NavPrimary',
  props: {
    nav: {
      type: Object
    }
  }
}
</script>
