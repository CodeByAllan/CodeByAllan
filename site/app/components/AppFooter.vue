<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">© {{ new Date().getFullYear() }} CodeByAllan. All
        rights
        reserved.</p>
    </template>
    <template #right>
      <UButton v-for="(item, index) in items" :key="index" :icon="item.icon" color="primary" variant="ghost"
        :to="item.link" target="_blank" :aria-label="item.name + ' icon'" />
    </template>
  </UFooter>
</template>
<script setup lang="ts">
import type { FooterItemProps } from '~/types/FooterItemProps';
const items: FooterItemProps[] = [
  {
    "name": "Linkedin",
    "link": "https://www.linkedin.com/in/codebyallan",
    "icon": "i-simple-icons-linkedin"
  },
  {
    "name": "GitHub",
    "link": "https://github.com/codebyallan",
    "icon": "i-simple-icons-github"
  },
  {
    "name": "Instagram",
    "link": "https://www.instagram.com/codebyallan/",
    "icon": "i-simple-icons-instagram"
  },
  {
    "name": "Telegram",
    "link": "https://telegram.me/codebyallan",
    "icon": "i-simple-icons-telegram"
  }
]
</script>
