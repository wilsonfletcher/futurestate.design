<template>
  <div class="prose prose-black lg:prose-xl">
    <figure>
      <blockquote>
        <p v-html="description"></p>
      </blockquote>
      <H6 v-if="name" as="figcaption">{{ name }}</H6>
    </figure>
  </div>
</template>

<script lang="ts">
import H6 from './H6.vue'

export default {
  name: 'BlockQuote',
  components: { H6 },
  props: {
    name: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
