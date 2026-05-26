<template>
  <section class="page-section flex min-h-[68vh] items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-14">
      <img
        :src="profileImage"
        alt="Douglas Franca"
        class="h-52 w-52 shrink-0 rounded-full object-cover shadow-lg ring-1 ring-zinc-200 sm:h-64 sm:w-64 md:h-80 md:w-80 dark:ring-zinc-800"
      />

      <div class="max-w-2xl text-center md:text-left">
        <h1 class="text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl md:text-6xl dark:text-zinc-50">
          Hi, I'm Douglas Franca
        </h1>

        <h2 class="mt-4 text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">
          Full-Stack Software Engineer
        </h2>

        <nav class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            :href="resumePdf"
            class="button-link"
          >
            View Resume
          </a>

          <a
            href="#contact"
            @click.prevent="scrollToContact"
            class="button-link"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import resumePdf from 'src/assets/DouglasFranca_curriculum.pdf'
import profileImage from 'src/assets/profile.jpg'

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
