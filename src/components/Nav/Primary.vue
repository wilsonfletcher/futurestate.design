<template>
  <nav :aria-label="nav.name" id="main-navigation">
    <ul class="flex lg:gap-5">
      <li v-for="item in nav.items" :key="item.name">
        <Button v-if="item.external" as="a" :href="item.url" :title="item.title" type="primary" rel="external"
          target="_blank">
          {{ item.name }}
        </Button>
        <Button v-else as="a" :href="item.url">
          {{ item.name }}
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { NavItem } from '../../types'
import Button from '../Button.vue'

interface Nav {
  name: string
  items: NavItem[]
}

export default defineComponent({
  name: 'NavPrimary',
  components: {
    Button
  },
  props: {
    nav: {
      type: Object as PropType<Nav>,
      required: true
    }
  },
  mounted() {
    const mainNav = document.querySelector(
      '#main-navigation'
    ) as HTMLInputElement

    const mainMenu = mainNav.querySelector('ul') as HTMLUListElement

    const setActiveMenuItem = () => {
      alert('Foo')

      const menuItems = [
        ...(mainMenu.querySelectorAll(
          'a:not([rel*="external"])'
        ) as HTMLAnchorElement)
      ]

      menuItems.map((menuItem) => {
        if (menuItem.pathname === window.location.pathname) {
          menuItem.classList.add('is-active')
          menuItem.setAttribute('aria-current', 'page')
        }
        return true
      })

      for (const menuItem of menuItems) {
        if (menuItem.pathname === window.location.pathname) {
          menuItem.classList.add('is-active');
          menuItem.setAttribute('aria-current', 'page');
        }
      }
    }

    setActiveMenuItem()
  }
})
</script>
