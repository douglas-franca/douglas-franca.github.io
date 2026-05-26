<template>
  <Timeline
    id="education"
    :title="education.title"
    :items="education.items"
    compact
  />
</template>

<script setup>
import education from 'src/data/education.json'
import Timeline from 'src/components/ui/Timeline.vue'
</script>
