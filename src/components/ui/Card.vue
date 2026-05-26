<template>
  <article class="group relative overflow-hidden rounded-xl bg-zinc-100 p-5 text-left transition-transform duration-300 ease-out hover:-translate-y-1 dark:bg-zinc-900/80 sm:p-6">
    <div class="relative z-10">
      <p class="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
        {{ date }}
      </p>

      <h3 class="mt-2 text-xl font-bold leading-tight text-zinc-950 dark:text-zinc-50">
        {{ title }}
      </h3>

      <div
        v-if="$slots.company"
        class="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300"
      >
        <slot name="company" />
      </div>

      <div class="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <!-- Slot for description -->
        <slot />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
