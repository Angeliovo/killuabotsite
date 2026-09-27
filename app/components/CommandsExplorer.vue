<script setup lang="ts">
import { CATEGORIES, useCommands } from '~/composables/useCommands'

const { query, activeCategory, filtered, setCategory } = useCommands()
</script>

<template>
  <section id="commands" class="wrap section">
    <div class="section-head">
      <p class="eyebrow">СПРАВОЧНИК</p>
      <h2>Найди нужную команду</h2>
      <p class="section-desc">Фильтруй по категории или ищи по названию — список живой, ничего не нужно листать вручную.</p>
    </div>

    <div class="cmd-panel">
      <div class="cmd-controls">
        <input
          v-model="query"
          type="text"
          class="cmd-search"
          placeholder="Поиск команды, например «бан»…"
          aria-label="Поиск команды"
        />
        <button
          v-for="cat in CATEGORIES"
          :key="cat"
          class="chip"
          :aria-pressed="activeCategory === cat"
          @click="setCategory(cat)"
        >
          {{ cat === 'all' ? 'Все' : cat }}
        </button>
      </div>

      <div class="cmd-list">
        <div v-for="command in filtered" :key="command.name" class="cmd-row">
          <span class="cmd-name">{{ command.name }}</span>
          <span class="cmd-desc">{{ command.desc }}</span>
          <span class="cmd-cat">{{ command.cat }}</span>
        </div>
      </div>

      <p v-if="!filtered.length" class="cmd-empty">Ничего не найдено. Попробуй другой запрос.</p>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 4.5rem 0;
}
.section-head {
  max-width: 56ch;
  margin-bottom: 2.6rem;
}
.section-head h2 {
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 700;
  margin-top: 0.6rem;
}
.section-desc {
  color: var(--muted);
  margin-top: 0.7rem;
}

.cmd-panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
}
.cmd-controls {
  display: flex;
  gap: 0.6rem;
  padding: 1.1rem;
  border-bottom: 1px solid var(--line);
  flex-wrap: wrap;
}
.cmd-search {
  flex: 1;
  min-width: 180px;
  background: var(--surface-2);
  border: 1px solid var(--line);
  border-radius: 9px;
  padding: 0.65rem 0.9rem;
  color: var(--text);
  font: inherit;
}
.cmd-search:focus {
  outline: 2px solid var(--volt);
  outline-offset: 0;
  border-color: transparent;
}
.chip {
  background: var(--surface-2);
  border: 1px solid var(--line);
  color: var(--muted);
  padding: 0.55rem 1rem;
  border-radius: 9px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.chip[aria-pressed='true'] {
  color: var(--volt);
  border-color: var(--volt-dim);
}
.cmd-list {
  max-height: 340px;
  overflow-y: auto;
}
.cmd-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid var(--line);
}
.cmd-row:last-child {
  border-bottom: none;
}
.cmd-name {
  font-family: 'Chakra Petch', system-ui, sans-serif;
  color: var(--volt);
  font-weight: 600;
  min-width: 150px;
  font-size: 0.95rem;
}
.cmd-desc {
  color: var(--muted);
  font-size: 0.88rem;
  flex: 1;
}
.cmd-cat {
  font-size: 0.72rem;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 100px;
  padding: 0.18rem 0.55rem;
  white-space: nowrap;
}
.cmd-empty {
  padding: 2.2rem;
  text-align: center;
  color: var(--muted);
}

@media (max-width: 860px) {
  .cmd-name {
    min-width: 120px;
  }
}
</style>
