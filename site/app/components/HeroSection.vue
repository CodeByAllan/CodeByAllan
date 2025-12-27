<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 w-full">
      <div class="lg:col-span-1 space-y-6">
        <h1 v-motion :initial="{ opacity: 0, y: 30 }" :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
        }" class="text-6xl font-extrabold tracking-tight">
          Hi, I'm <span class="text-primary-400 dark:text-primary-300">Allan Pereira</span>
        </h1>

        <p v-motion :initial="{ opacity: 0, y: 20 }" :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, delay: 200, ease: 'easeOut' }
        }" class="text-xl text-gray-700 dark:text-gray-400">
          Expert in developing high-performance digital solutions,
          specializing in robust
          <span class="font-bold text-gray-950 dark:text-gray-50">Backend</span> architectures
          (Node.js,TypeScript/Express.js) and cutting-edge
          <span class="font-bold text-gray-950 dark:text-gray-50">Frontend</span> interfaces
          (Nuxt.js, Vue.js, Tailwind CSS).
          Currently expanding expertise into the .NET/C# ecosystem, aiming for holistic and modern systems design.
        </p>

        <div v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{
          opacity: 1,
          scale: 1,
          transition: { duration: 500, delay: 400 }
        }">
          <ActionButton>
            <UButton class="cursor-pointer" size="xl" label="View Profile LinkedIn" variant="solid" icon="i-lucide-eye"
              to="https://www.linkedin.com/in/codebyallan" target="_blank" />
          </ActionButton>
        </div>
      </div>

      <div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{
        opacity: 1,
        x: 0,
        transition: { duration: 1000, ease: 'easeOut' }
      }" class="lg:col-span-1 flex justify-center lg:justify-end">
        <div class="w-72 h-96 flex items-center justify-center">
          <NuxtImg src="/images/logo.svg" alt="Logo Profile" v-motion :initial="{ y: 0 }" :enter="{
            y: -15,
            transition: {
              duration: 2000,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }" class="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//
</script>
