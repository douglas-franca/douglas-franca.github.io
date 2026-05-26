<template>
  <Timeline
    id="experience"
    class="page-section"
    :title="experience.title"
    :description="experience.description"
    :items="experience.items"
    alternate
  />
</template>

<script setup>
import experience from 'src/data/experience.json'
import Timeline from 'src/components/ui/Timeline.vue'
</script>
