<template>
  <article class="flex flex-col space-y-4 relative">
    <div class="aspect-w-16 aspect-h-9 bg-grey-dark">
      <img
        v-if="image"
        class="object-fill object-center"
        :src="image.url"
        :width="image.width"
        :height="image.height"
        :alt="image.alt"
        loading="lazy"
      />
    </div>
    <h3 v-if="name" class="font-bold text-2xl leading-tight">
      <a class="c-url" :href="url" target="_blank" rel="external">{{ name }}</a>
    </h3>
    <time v-if="datePublished" class="sr-only" :datetime="datePublished">{{
      datePublished
    }}</time>
    <p v-if="description" class="line-clamp-2">{{ description }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import type { PropType } from 'vue'

// interface Name {
//   name: string
//   description: string
//   url: string
//   image: object
//   datePublished: string
// }

export default defineComponent({
  name: 'ArticleComponent',
  props: {
    name: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    description: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    url: {
      type: String,
      required: false,
      default() {
        return null
      }
    },
    image: {
      type: Object,
      required: false,
      default() {
        return null
      }
    },
    datePublished: {
      type: String,
      required: false,
      default() {
        return null
      }
    }
  }
})
</script>
