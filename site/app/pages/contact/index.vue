<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
    <div v-motion :initial="{ opacity: 0, x: -50 }" :visible-once="{
      opacity: 1,
      x: 0,
      transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
    }">
      <ContactSection />
    </div>

    <div v-motion :initial="{ opacity: 0, x: 50 }" :visible-once="{
      opacity: 1,
      x: 0,
      transition: { duration: 800, delay: 200, ease: [0.16, 1, 0.3, 1] }
    }">
      <ContactForm />
    </div>
  </div>
</template>
