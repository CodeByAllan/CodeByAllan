<template>
  <div>
    <h1 v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{
      opacity: 1,
      y: 0,
      transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
    }" class="font-black text-6xl tracking-tight pb-6">
      My Works
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
      <ProjectCard v-for="(project, index) in projects" :key="project.id" v-motion :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            delay: (index % 3) * 150 + (Math.floor(index / 3) * 100),
            ease: 'easeOut'
          }
        }" :title="project.title" :description="project.description" :imageUrl="project.imageUrl"
        :projectUrl="project.projectUrl" :tags="project.tags" class="mb-6" :demo-url="project.demoUrl" />
    </div>
  </div>
</template>
<script setup lang="ts">

const projects = [
  {
    id: 1,
    title: 'TeleRb',
    description: 'Minimalist Telegram bot library for ruby',
    projectUrl: 'https://github.com/CodeByAllan/TeleRb',
    demoUrl: 'https://rubygems.org/gems/telerb',
    tags: ['Ruby']
  },
  {
    id: 2,
    title: 'Chip-8',
    description: 'A Chip-8 emulator written in Go for Windows, capable of running classic games from the 1970s with graphics, sound and user input support',
    imageUrl: '/images/projects/chip8.png',
    projectUrl: 'https://github.com/CodeByAllan/chip-8',
    demoUrl: "https://github.com/CodeByAllan/chip-8/releases",
    tags: ['Go', 'Raylib']
  },
  {
    id: 3,
    title: 'Bandeira Entertainment',
    description: 'Landing page for entertainment company made in react and styled components',
    imageUrl: '/images/projects/bandeira.png',
    projectUrl: 'https://github.com/CodeByAllan/bandeira-entertainment',
    demoUrl: 'https://bandeira-entertainment-two.vercel.app/',
    tags: ['React', 'Styled Components', 'TypeScript']
  },
  {
    id: 4,
    title: 'User Api',
    description: 'A simple user crud API, with authentication and jwt token generation, public and private routes and redis for caching',
    projectUrl: 'https://github.com/CodeByAllan/user-api',
    tags: ['Node', 'TypeScript', 'Express', 'PostgreSQL', 'TypeORM', 'Redis']
  },
  {
    id: 5,
    title: 'Codly Website',
    description: 'Code is our art. This website is our gallery.',
    imageUrl: '/images/projects/codly.png',
    projectUrl: 'https://github.com/codlyofficial/codly-website-case',
    demoUrl: 'https://codlyofficial.com.br/',
    tags: ['Nuxt', 'Vue', 'Tailwindcss', 'TypeScript', 'Zod']
  },
  {
    id: 6,
    title: 'PixyQr',
    description: 'A simple and privacy-focused web application built with Vue 3, TypeScript, and Quasar to generate Pix QR codes. The app runs entirely on the client side, ensuring no personal data is sent to servers. It provides a clean, minimalist interface for quick and secure QR code generation.',
    imageUrl: '/images/projects/pixyqr.png',
    projectUrl: 'https://github.com/CodeByAllan/pixyqr',
    demoUrl: 'https://pixyqr.vercel.app/',
    tags: ['Quasar', 'Vue', 'TypeScript']
  },
  {
    id: 7,
    title: 'Surebet App',
    description: 'Surebet Calculator built with the TALL Stack (Laravel, Livewire, Tailwind CSS). Demonstrates reactive web development and complex arbitrage logic.',
    imageUrl: '/images/projects/surebet.png',
    projectUrl: 'https://github.com/CodeByAllan/surebet-app',
    tags: ['Php', 'Laravel', 'Livewire', 'Tailwindcss']
  },
  {
    id: 8,
    title: 'Caesar App',
    description: 'C# implementation of the Caesar cipher for academic studies on information security and cryptography.',
    imageUrl: '/images/projects/caesar.png',
    projectUrl: 'https://github.com/CodeByAllan/Caesar',
    tags: ['C#', '.Net']
  },
  {
    id: 9,
    title: 'CodeByAllan',
    description: 'My personal portfolio.Developed using the Nuxt framework for performance, efficiently styled with Tailwind CSS, and utilizing TypeScript to ensure code scalability and quality.',
    imageUrl: '/images/projects/codebyallan.png',
    projectUrl: 'https://github.com/CodeByAllan/CodeByAllan',
    demoUrl: 'https://www.codebyallan.com.br/',
    tags: ['Nuxt', 'Vue', 'Tailwindcss', 'TypeScript', 'Zod']
  }
].reverse();
</script>
