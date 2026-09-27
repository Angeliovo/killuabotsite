<script setup lang="ts">
import type { Developer } from '~/types/command'

const developers: Developer[] = [
  { initials: 'KD', name: 'Killua Dev', role: 'Создатель и основной разработчик' },
  { initials: 'УD', name: 'Утка Dev', role: 'Помощник в разработке' }
]
</script>

<template>
  <section id="devs" class="wrap section">
    <div class="section-head">
      <p class="eyebrow">КОМАНДА</p>
      <h2>Кто делает Killua Bot</h2>
    </div>

    <div class="devs">
      <div v-for="dev in developers" :key="dev.name" class="dev-card">
        <div class="dev-avatar">{{ dev.initials }}</div>
        <div>
          <div class="dev-name">{{ dev.name }}</div>
          <div class="dev-role">{{ dev.role }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 4.5rem 0;
}
.section-head h2 {
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 700;
  margin-top: 0.6rem;
  margin-bottom: 2.6rem;
}
.devs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}
.dev-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 1.6rem;
  display: flex;
  gap: 1.1rem;
  align-items: center;
}
.dev-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Chakra Petch', system-ui, sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  background: linear-gradient(135deg, var(--violet), var(--volt));
  color: #04121a;
}
.dev-role {
  color: var(--muted);
  font-size: 0.85rem;
}
.dev-name {
  font-weight: 700;
  font-size: 1.05rem;
  margin-top: 0.15rem;
}

@media (max-width: 860px) {
  .devs {
    grid-template-columns: 1fr;
  }
}
</style>
