<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 items-center gap-16 w-full">
    <div class="col-span-4">
      <h1 class="text-4xl font-bold">These are the<br />technologies I’ve been using</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 col-span-4">
      <ListTechCard v-for="(tech, index) in techList" :key="index" :title="tech.title" :skills="tech.skills" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ListTechCardProps } from '~/types/ListTechCardProps';

const techList: ListTechCardProps[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/vue.svg" },
      { name: "Nuxt.js", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/nuxt.svg" },
      { name: "Html", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/html.svg" },
      { name: "Css", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/css.svg" },
      { name: "Tailwind Css", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/tailwindcss.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: ".Net", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/dotnet.svg" },
      { name: "Node.js", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/nodejs.svg" },
      { name: "Express.js", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/express.svg" },
      { name: "Entity Framework", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/entityframework.svg" }
    ]
  },
  {
    title: 'Languages',
    skills: [
      { name: "C#", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/csharp.svg" },
      { name: "JavaScript", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/js.svg" },
      { name: "TypeScript", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan /refs/heads/master/images/typescript.svg" }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: "Postgresql", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/postgresql.svg" },
      { name: "Sqlite", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/sqlite.svg" },
      { name: "Redis", image: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/images/redis.svg" }
    ]
  }
];
</script>
