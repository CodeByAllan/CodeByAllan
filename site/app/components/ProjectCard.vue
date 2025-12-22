<template>
  <UCard
    class="bg-gray-300 dark:bg-gray-800 rounded-4xl shadow-xl overflow-hidden group transition-all duration-300 hover:ring-2 hover:ring-primary-500">
    <UModal :title="title">
      <div class="cursor-pointer">
        <div class="overflow-hidden rounded-4xl">
          <NuxtImg v-if="imageUrl" :src="imageUrl" :alt="title"
            class="w-full h-full object-fill transform transition-transform duration-500 group-hover:scale-110" />
          <UIcon v-else name="i-lucide-terminal"
            class="w-full h-48 text-primary-500 opacity-50 transform transition-transform duration-500 group-hover:scale-125" />
        </div>
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
          <div class="flex flex-wrap gap-1 mb-4">
            <UBadge v-for="tag in tags" :key="tag" size="sm" variant="subtle">
              {{ tag }}
            </UBadge>
          </div>
          <UButton label="View more" variant="ghost" block trailing-icon="i-lucide-arrow-right" />
        </div>
      </div>
      <template #body>
        <div class="flex flex-col gap-6">
          <p>
            {{ description }}
          </p>
          <div class="flex gap-4">
            <UButton variant="solid" color="primary" icon="i-lucide-github" :to="projectUrl" target="_blank" external>
              Github
            </UButton>
            <UButton v-if="demoUrl" variant="solid" color="primary" icon="i-lucide-external-link" :to="demoUrl"
              target="_blank" external>
              Demo
            </UButton>
          </div>
          <div>
            <span class="block text-sm font-semibold mb-2 opacity-70">Technologies:</span>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="(tag, index) in tags" :key="index" variant="soft">
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </div>
      </template>
    </UModal>
  </UCard>
</template>
<script setup lang="ts">
import type { ProjectCardProps } from '~/types/ProjectCardProps';
defineProps<ProjectCardProps>();
</script>
