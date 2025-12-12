<template>
  <UCard class="bg-gray-300 dark:bg-gray-800 rounded-4xl shadow-xl">
    <h3 class="text-xl font-bold mb-4">{{ title }}</h3>
    <div>
      <ul class="space-y-2">
        <li v-for="(skill, index) in skills" :key="index" class="flex items-center">
          <img :src="skill.image" :alt="'logo ' + skill.name" class="w-6 h-6 mr-3" />
          <p class="text-gray-700 dark:text-gray-400 font-medium">{{ skill.name }}</p>
        </li>
      </ul>
    </div>
  </UCard>
</template>
<script setup lang="ts">
import type { ListTechCardProps } from '~/types/ListTechCardProps';
defineProps<ListTechCardProps>()
</script>
