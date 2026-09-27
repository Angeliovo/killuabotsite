<script setup lang="ts">
interface Feature {
  tag: string
  title: string
  desc: string
  path: string
}

const features: Feature[] = [
  {
    tag: '18 команд',
    title: 'Модерация',
    desc: 'Автобан за спам и ссылки, предупреждения, мьют по таймеру, лог действий — сервер под контролем без ручной работы.',
    path: 'M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4Z|m9 12 2 2 4-4'
  },
  {
    tag: '24/7',
    title: 'Музыка',
    desc: 'YouTube, Spotify и прямые ссылки в высоком качестве, очередь треков, плейлисты для сервера без перебоев.',
    path: 'M9 18V5l12-2v13'
  },
  {
    tag: '9 игр',
    title: 'Игры',
    desc: 'Виселица, угадай число, дуэли участников и система уровней с рейтингом внутри сервера.',
    path: 'M2 12h4M9 10v4M15 12h.01M18 10h.01'
  }
]
</script>

<template>
  <section id="features" class="wrap section">
    <div class="section-head">
      <p class="eyebrow">ЧТО УМЕЕТ БОТ</p>
      <h2>Три модуля, ноль лишнего</h2>
      <p class="section-desc">Каждый модуль включается отдельно — сервер получает только то, что реально используется.</p>
    </div>

    <div class="features">
      <div v-for="feature in features" :key="feature.title" class="feature">
        <span class="tag">{{ feature.tag }}</span>
        <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <circle v-if="feature.title === 'Музыка'" cx="6" cy="18" r="3" />
          <circle v-if="feature.title === 'Музыка'" cx="18" cy="16" r="3" />
          <rect v-if="feature.title === 'Игры'" x="2" y="7" width="20" height="10" rx="4" />
          <path v-for="d in feature.path.split('|')" :key="d" :d="d" />
        </svg>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
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

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}
.feature {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 1.7rem;
  position: relative;
}
.ic {
  width: 38px;
  height: 38px;
  color: var(--volt);
  margin-bottom: 1rem;
}
.feature h3 {
  font-family: 'Chakra Petch', system-ui, sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.45rem;
}
.feature p {
  color: var(--muted);
  font-size: 0.93rem;
}
.tag {
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  font-size: 0.7rem;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 100px;
  padding: 0.2rem 0.55rem;
}

@media (max-width: 860px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
