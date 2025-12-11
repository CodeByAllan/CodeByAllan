<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <AppFooter />
  </UApp>
</template>
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-gray-50 dark:bg-gray-950",
  },
});
</script>
