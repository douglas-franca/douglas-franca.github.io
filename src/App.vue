<script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Stack from './components/Stack.vue'
import Footer from './components/Footer.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <main class="page-shell">
    <ThemeToggle />
    <Hero />
    <About />
    <Experience />
    <Stack />
    <Footer />
  </main>
</template>
