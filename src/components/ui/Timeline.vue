<template>
  <section
    :id="id"
    class="timeline-block"
    :class="{
      'timeline-block-alternate': alternate && !compact,
      'timeline-block-compact': compact,
    }"
  >
    <div :class="compact ? 'mx-auto max-w-none text-left' : 'mx-auto max-w-5xl text-center'">
      <h2 :class="compact ? 'text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50' : 'text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl dark:text-zinc-50'">
        {{ title }}
      </h2>

      <p
        v-if="description"
        :class="compact ? 'mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300' : 'mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300'"
      >
        {{ description }}
      </p>

      <ol class="timeline-list">
        <li
          v-for="(item, index) in items"
          :key="`${item.title}-${item.date}`"
          class="timeline-item"
          :class="{ 'timeline-item-right': alternate && !compact && index % 2 === 1 }"
        >
          <span class="timeline-dot" />

          <Card
            :date="item.date"
            :title="item.title"
          >
            <template #company>
              <slot
                name="meta"
                :item="item"
              >
                <a
                  v-if="item.meta?.url"
                  :href="item.meta.url"
                  target="_blank"
                  rel="noreferrer"
                  class="cursor-pointer text-blue-600 dark:text-blue-400"
                >
                  {{ item.meta.name }}
                </a>

                <span v-else>
                  {{ item.meta?.name }}
                </span>
              </slot>
            </template>

            <slot :item="item">
              <ul class="space-y-3">
                <li
                  v-for="(line, lineIndex) in item.description"
                  :key="lineIndex"
                >
                  {{ line }}
                </li>
              </ul>
            </slot>
          </Card>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import Card from 'src/components/ui/Card.vue'

defineProps({
  alternate: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.timeline-list {
  display: grid;
  gap: 28px;
  list-style: none;
  margin-top: 40px;
  padding: 0;
  position: relative;
}

.timeline-block {
  --timeline-line-color: var(--color-zinc-200);
  --timeline-dot-color: var(--color-zinc-950);
  --timeline-dot-border-color: var(--color-zinc-50);
}

.timeline-block:where(.dark, .dark *) {
  --timeline-line-color: var(--color-zinc-800);
  --timeline-dot-color: var(--color-zinc-50);
  --timeline-dot-border-color: var(--color-zinc-950);
}

.timeline-list::before {
  background: var(--timeline-line-color);
  bottom: 24px;
  content: "";
  left: 12px;
  position: absolute;
  top: 24px;
  width: 1px;
}

.timeline-item {
  padding-left: 40px;
  position: relative;
}

.timeline-dot {
  background: var(--timeline-dot-color);
  border: 4px solid var(--timeline-dot-border-color);
  border-radius: 999px;
  height: 24px;
  left: 0;
  position: absolute;
  top: 22px;
  width: 24px;
  z-index: 1;
}

.timeline-block-compact .timeline-list {
  gap: 20px;
  margin-top: 24px;
}

@media (min-width: 768px) {
  .timeline-block-alternate .timeline-list::before {
    left: 50%;
  }

  .timeline-block-alternate .timeline-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 56px minmax(0, 1fr);
    padding-left: 0;
  }

  .timeline-block-alternate .timeline-item > article {
    grid-column: 1;
  }

  .timeline-block-alternate .timeline-item-right > article {
    grid-column: 3;
  }

  .timeline-block-alternate .timeline-dot {
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }
}
</style>
