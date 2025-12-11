<template>
  <UCard class="h-56 rounded-4xl bg-gray-300 dark:bg-gray-800">
    <div class="flex flex-col justify-center items-center pt-6">
      <img width="80px" :src="image" :alt="name + ' logo'">
      <h3 class="text-2xl mt-2 font-black">{{ name }}</h3>
    </div>
  </UCard>
</template>
<script setup lang="ts">
import type { TechCardProps } from '~/types/TechCardProps';
defineProps<TechCardProps>()
</script>
