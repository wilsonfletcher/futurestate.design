<template>
  <article class="flex flex-col space-y-4 relative">
    <div class="aspect-w-16 aspect-h-9 bg-grey-dark">
      <img
        class="object-fill object-center"
        v-if="image"
        :src="image.url"
        :width="image.width"
        :height="image.height"
        :alt="image.alt"
        loading="lazy" />
    </div>
    <h3 class="font-bold text-2xl leading-tight">
      <a class="c-url" :href="url" target="_blank" rel="external">{{ name }}</a>
    </h3>
    <time class="sr-only" :datetime="datePublished">{{ datePublished }}</time>
    <p class="line-clamp-2">{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
    datePublished: {
      type: String,
      required: false,
    },
  },
}
</script>
