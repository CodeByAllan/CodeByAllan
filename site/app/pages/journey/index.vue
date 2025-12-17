<template>
  <h1 class="font-black text-6xl tracking-tight pb-6">
    Learning Journey
  </h1>
  <UContainer class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
    <JourneyCard v-for="(certificate, index) in certificates" :key="index" :institution="certificate.institution"
      :course="certificate.course" :description="certificate.description" :year_start="certificate.year_start"
      :year_end="certificate.year_end" :progress="certificate.progress"
      :certificate_link="certificate.certificate_link">
    </JourneyCard>
  </UContainer>
</template>
<script setup lang="ts">
import type { JourneyCardProps } from '~/types/JourneyCardProps';
const certificates: JourneyCardProps[] = [
  {
    institution: "University of Salvador",
    course: "Graduation in Software Analysis and Development",
    description: "Higher education focused on software development, databases, data structures, and programming logic. The course prepares professionals to work with web development, mobile development, embedded systems, and cloud based solutions.",
    year_start: "2025",
    year_end: "2028",
    progress: "progress"
  },
  {
    institution: "Linux Tips",
    course: "SQL Essentials Certification",
    description: "Master essential Structured Query Language (SQL) for relational database management. Covers DDL/DML commands, basic querying, data filtering, aggregation, and table/index creation. Focuses on data integrity, optimization, and efficient data manipulation for any technical environment.",
    year_start: "2025",
    certificate_link: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/docs/sql.pdf",
    progress: "completed"
  },
  {
    institution: "Udemy",
    course: "Agile Methodologies from A to Z",
    description: "Comprehensive mastery of Agile Methodologies from principles to practical application. Covers key frameworks including Scrum, Kanban, Lean, and eXtreme Programming (XP). Focuses on iterative planning, continuous delivery, value management, and leading high-performance teams.",
    year_start: "2025",
    certificate_link: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/docs/agileMethodologies.pdf",
    progress: "completed"
  },
  {
    institution: "Qualifica Courses",
    course: "Javascript from basic to advanced",
    description: "This intensive course covers the JavaScript language from its essential fundamentals to advanced topics. The program includes basic syntax, DOM manipulation, asynchronous functions (Promises and Async/Await), and modern ES6+ features.",
    year_start: "2023",
    certificate_link: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/docs/javascript.pdf",
    progress: "completed"
  },
  {
    institution: "Qualifica Courses",
    course: "Git e Github from basic to advanced",
    description: "Focus on Git distributed version control and GitHub. Covers fundamentals (commits, staging, history) and advanced topics: collaborative workflows, complex branching/merging, history rewriting with rebase, and advanced conflict resolution.",
    year_start: "2023",
    certificate_link: "https://raw.githubusercontent.com/CodeByAllan/CodeByAllan/refs/heads/master/docs/gitAndGithub.pdf",
    progress: "completed"
  },
  {
    institution: "Linux Tips",
    course: "Linux Essentials Certification",
    description: "Mastering Linux Essentials for certification. Covers fundamental OS architecture, efficient Shell (Bash) usage, core terminal commands, file management, and user security/permissions. Essential foundation for careers in Linux system administration, software development, and IT infrastructure.",
    year_start: "2023",
    progress: "completed"
  }
]
</script>
