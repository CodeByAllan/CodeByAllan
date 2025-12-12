<template>
  <div>
    <HeroSection />
    <UContainer class="py-12">
      <TechCarousel :items=techItems />
    </UContainer>
    <UContainer>
      <TechKeywords :keywords=keywords />
    </UContainer>
    <UContainer class="py-12">
      <ListTech />
    </UContainer>
  </div>
</template>
<script setup lang="ts">
import type { TechCardProps } from '~/types/TechCardProps';

const techItems: Array<TechCardProps> = [
  {
    "name": "TypeScript",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/typescript.svg"
  },
  {
    "name": "JavaScript",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/js.svg"
  },
  {
    "name": "HTML",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/html.svg"
  },
  {
    "name": "CSS",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/css.svg"
  },
  {
    "name": "NUXT",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/nuxt.svg"
  },
  {
    "name": "VUE",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/vue.svg"
  },
  {
    "name": "TAILWIND",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/tailwindcss.svg"
  },
  {
    "name": "C#",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/csharp.svg"
  },
  {
    "name": ".NET",
    "image": "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/dotnet.svg"
  },
]
const keywords: string[] = [
  'C#',
  'Typescript',
  'Vue',
  'Coffee'
];
</script>
