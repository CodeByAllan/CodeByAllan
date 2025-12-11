<template>
  <UCarousel v-slot="{ item }" loop dots :autoplay="{
    delay: 2000, stopOnFocusIn: true,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4' }">
    <div class="mx-2">
      <TechCard :name="item.name" :image="item.image" />
    </div>
  </UCarousel>
</template>
<script setup lang="ts">
import type { TechCarouselProps } from '~/types/TechCarouselProps';
defineProps<TechCarouselProps>()
</script>
