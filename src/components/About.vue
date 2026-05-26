<template>
  <section
    id="about"
    class="page-section"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        About
      </h2>

      <div class="mt-6 space-y-5 text-base leading-8 text-zinc-700 sm:text-lg dark:text-zinc-300">
        <p>
          I'm Douglas França, a full-stack software engineer with over {{ getYearsOfExperience }} years of experience building production-grade systems across backend-heavy applications, internal business platforms and performance-critical workflows. I work across the stack using <strong>Vue</strong>, <strong>Ruby on Rails</strong>, <strong>Node.js</strong> and <strong>TypeScript</strong>, with a strong focus on building reliable APIs, improving system performance and reducing operational complexity through software.
        </p>

        <p>
          Throughout my career, I've worked on systems involving large-scale business workflows, including optimizing internal pipelines, improving processing times in production environments and enhancing overall system efficiency in critical applications. I've also worked on geocoding-related systems where I helped reduce API costs and improve performance for location-based features used in production.
        </p>

        <p>
          More recently, I've been working with Capacitor and Vue to build cross-platform applications and improve deployment and delivery flows for production systems. I enjoy working end-to-end, from backend architecture and data modeling to frontend implementation, and I care deeply about writing maintainable software that is both scalable and practical for real-world usage.
        </p>

        <p>
          What motivates me most is solving problems where performance, reliability and cost efficiency matter, and turning complex workflows into simple and effective systems that teams can depend on.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const getYearsOfExperience = computed(() => {
  const startYear = 2022
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})
</script>
