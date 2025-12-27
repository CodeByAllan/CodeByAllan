<template>
  <div class="flex flex-col items-center justify-center h-[300px] rounded-xl">
    <h2 v-for="(keyword, index) in keywords" :key="index" v-motion :initial="{ opacity: 0, x: -20 }" :visible-once="{
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 150,
        duration: 600,
        ease: 'easeOut'
      }
    }" class="text-5xl font-extrabold py-3 tracking-tight" :class="getKeywordClass(index)">
      {{ keyword }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import type { TechKeywordsProps } from '~/types/TechKeywordsProps';
defineProps<TechKeywordsProps>()

const colorClasses = [
  'text-primary-400',
  'text-primary-500',
  'text-primary-500',
  'text-primary-600'
];

const getKeywordClass = (index: number): string => {
  return colorClasses[index % colorClasses.length]!;
}
</script>
