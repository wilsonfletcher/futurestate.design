<template>
  <div role="contentinfo" class="flex-none py-8 bg-black text-white">
    <Container>
      <p>
        Copyright &copy;
        <a
          href="https://wilsonfletcher.com/"
          target="_blank"
          class="hover:underline"
          >Wilson Fletcher</a
        >
        2022. All rights reserved.
      </p>
    </Container>
  </div>
</template>

<script>
import Container from './Container.vue'

export default {
  name: 'BaseFooter',
  components: {
    Container
  }
}
</script>
