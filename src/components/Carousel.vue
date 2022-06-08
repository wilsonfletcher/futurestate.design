<template>
  <Carousel>
    <Slide v-for="item in items" :key="item.slug" :itemsToShow="2.95">
      <div class="carousel__item">
        <img :src="item.frontmatter.image.url" alt="" class="w-full mb-3" />
        {{ item.frontmatter.description }}
        <h3>{{ item.frontmatter.name }}</h3>
        <p><a :href="item.frontmatter.url" class="before:content-['']" target=" _blank"
            rel="external noreferrer noopener">View post</a></p>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselComponent',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  props: {
    items: {
      type: Array
    }
  }
})
</script>

<style lang="postcss">
.carousel__slide {
  .carousel__item {
    @apply bg-white p-5 opacity-50 scale-100 duration-500 min-h-[200px] text-left relative;
  }

  &--visible {
    .carousel__item {
      @apply opacity-100 bg-yellow;
      transform: rotateY(0);
    }
  }
}

/* .carousel__slide--next>.carousel__item {
  transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev>.carousel__item {
  transform: scale(0.9) translate(10px);
} */

.carousel__slide--active>.carousel__item {
  transform: scale(1);
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.carousel__next {
  @apply -translate-x-6;
}

.carousel__prev {
  @apply translate-x-6;
}
</style>
