<template>
  <section id="contact">
    <h2 class="text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50">
      {{ contact.title }}
    </h2>

    <p class="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
      {{ contact.description }}
    </p>

    <ul class="mt-6 space-y-3">
      <li
        v-for="link in contact.links"
        :key="link.href"
      >
        <a
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="inline-flex cursor-pointer items-center text-blue-600 dark:text-blue-400"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import contact from 'src/data/contact.json'
</script>
