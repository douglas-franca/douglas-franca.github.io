<script setup>
import { ref, onMounted, defineProps } from 'vue';

const displayText = ref('');
const index = ref(0);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    default: 0,
  },
  scrolled: {
    type: Function,
  },
});

const typeText = () => {
  if (index.value < props.text.length) {
    displayText.value += props.text[index.value];
    index.value += 1;
    if (props.scrolled) {
      props.scrolled();
    }
    setTimeout(typeText, props.speed);
  }
};

onMounted(() => {
  typeText();
});
</script>

<template>
  {{ displayText }}
</template>