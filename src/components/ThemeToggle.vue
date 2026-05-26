<template>
  <button
    type="button"
    class="fixed right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white shadow-sm ring-1 ring-zinc-200 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:ring-zinc-800 dark:hover:bg-zinc-200"
    :aria-label="isDark ? 'Use light theme' : 'Use dark theme'"
    @click="toggleTheme"
  >
    <svg
      v-if="isDark"
      class="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>

    <svg
      v-else
      class="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z" />
    </svg>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const savedTheme = localStorage.getItem('theme')
const isDark = ref(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

applyTheme()
</script>
