<template>
  <section
    id="stack"
    class="page-section"
  >
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        {{ stack.title }}
      </h2>

      <div class="mt-8">
        <ul class="tech-grid">
          <li
            v-for="(technology, index) in stack.items"
            :key="technology.name"
            class="tech-card"
            :style="{ animationDelay: `${(index + 1) * 0.1}s` }"
          >
            <i
              :class="technology.icon"
              aria-hidden="true"
            />

            <span>{{ technology.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import stack from 'src/data/stack.json'
</script>

<style scoped>
.tech-card {
  --card-bg: var(--color-zinc-100);
  --card-bg-hover: var(--color-zinc-200);
  --card-border: transparent;
  --card-shimmer: color-mix(in oklab, var(--color-white) 72%, transparent);
  --card-text: var(--color-zinc-700);

  align-items: center;
  animation: stack-card-in 0.6s ease-out both;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  color: var(--card-text);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  gap: 12px;
  justify-content: center;
  min-height: 108px;
  overflow: hidden;
  padding: 20px 12px;
  position: relative;
  text-align: center;
  transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  list-style-type: none;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0;
  width: 100%;
}

.tech-card::before {
  background: linear-gradient(110deg, transparent 20%, var(--card-shimmer) 50%, transparent 80%);
  content: "";
  inset: 0;
  position: absolute;
  transform: translateX(-140%);
}

.tech-card:hover {
  background: var(--card-bg-hover);
  transform: translateY(-4px);
}

.tech-card:hover::before {
  animation: card-shimmer 0.9s ease-out;
}

.tech-card i {
  font-size: 40px;
}

.tech-card i,
.tech-card span {
  position: relative;
  z-index: 1;
}

.tech-card span {
  color: var(--card-text);
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:where(.dark, .dark *) {
  --card-bg: color-mix(in oklab, var(--color-zinc-900) 42%, transparent);
  --card-bg-hover: color-mix(in oklab, var(--color-zinc-800) 52%, transparent);
  --card-border: color-mix(in oklab, var(--color-zinc-700) 36%, transparent);
  --card-shimmer: color-mix(in oklab, var(--color-zinc-50) 14%, transparent);
  --card-text: var(--color-zinc-300);
}

@keyframes card-shimmer {
  from {
    transform: translateX(-140%);
  }

  to {
    transform: translateX(140%);
  }
}

@keyframes stack-card-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
