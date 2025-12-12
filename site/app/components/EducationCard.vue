<template>
  <UCard class="bg-gray-300 dark:bg-gray-800 rounded-4xl flex justify-center items-center">
    <h1 class="text-xl font-bold mb-4">{{ institution }}</h1>
    <h3 class="text-md font-medium mb-4 text-primary-500">Certificate in {{ course }}</h3>
    <p v-if="description" class="text-gray-700 dark:text-gray-400">{{ description }}</p>
    <div class="flex justify-between mt-4">
      <div class="flex justify-center items-center gap-2">
        <p class="text-gray-700 dark:text-gray-400 font-bold">{{ year_start }} {{ year_end ? '-' : '' }} {{ year_end }}
        </p>
        <UChip standalone inset :color="progress == 'completed' ? 'success' : 'warning'" />
      </div>
      <UButton class="font-bold" v-if="certificate_link && progress == 'completed'" variant="link"
        label="View Certificate" leading-icon="i-lucide-file-down" :to="certificate_link" target="_blank" />
    </div>
  </UCard>
</template>
<script setup lang="ts">
import type { EducationCardProps } from '~/types/EducationCardProps';
defineProps<EducationCardProps>()
</script>
