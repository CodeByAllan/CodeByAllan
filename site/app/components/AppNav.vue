<template>
  <UNavigationMenu color="primary" :items="items" class="w-full" />
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/'
    },
    {
      label: 'Education',
      icon: 'i-lucide-graduation-cap',
      to: '/education'
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '/contact'
    },
  ]
])
</script>
