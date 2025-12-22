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
      label: 'Journey',
      icon: 'i-lucide-graduation-cap',
      to: '/journey'
    }
    ,
    {
      label: 'Projects',
      icon: 'i-lucide-briefcase',
      to: '/projects'
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '/contact'
    }
  ]
])
</script>
