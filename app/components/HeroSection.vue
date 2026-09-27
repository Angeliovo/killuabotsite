<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { BotStat } from '~/types/command'

const stats: BotStat[] = [
  { id: 'servers', label: 'серверов', target: 4200, suffix: '+' },
  { id: 'users', label: 'пользователей', target: 380000, suffix: '+' },
  { id: 'commands', label: 'команд', target: 27, suffix: '' }
]

const displayValues = ref<Record<string, string>>(
  Object.fromEntries(stats.map((s) => [s.id, '0']))
)

const statsRef = ref<HTMLElement | null>(null)
let hasAnimated = false
let observer: IntersectionObserver | null = null

function animateStat(stat: BotStat): void {
  const duration = 1400
  let start: number | null = null

  function step(timestamp: number): void {
    if (start === null) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues.value[stat.id] =
      Math.floor(eased * stat.target).toLocaleString('ru-RU') + stat.suffix
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!statsRef.value) return
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting && !hasAnimated) {
        hasAnimated = true
        stats.forEach(animateStat)
        observer?.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(statsRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="hero wrap">
    <div>
      <p class="eyebrow">DISCORD-БОТ · ОНЛАЙН</p>
      <h1 class="headline">Скорость Killua<br />для твоего <span class="accent">сервера</span></h1>
      <p class="lede">
        Модерация, музыка и игры в одном боте — реагирует быстрее, чем ты успеешь набрать команду.
        Никаких лишних настроек, только результат.
      </p>

      <div class="hero-cta">
        <a href="#cta" class="btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M20.3 4.5a19 19 0 0 0-4.7-1.5l-.3.5a15 15 0 0 1 4 1.3 16 16 0 0 0-14.6 0 15 15 0 0 1 4-1.3l-.3-.5A19 19 0 0 0 3.7 4.5C1.3 8.4.6 12.2.9 15.9a19 19 0 0 0 5.8 2.9l.9-1.5a12 12 0 0 1-1.9-.9l.5-.4a13.6 13.6 0 0 0 11.6 0l.5.4a12 12 0 0 1-1.9.9l.9 1.5a19 19 0 0 0 5.8-2.9c.4-4.3-.6-8.1-3-11.4ZM8.8 13.6c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Zm6.4 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z"
            />
          </svg>
          Добавить в Discord
        </a>
        <a href="#commands" class="btn ghost">Смотреть команды</a>
      </div>

      <div ref="statsRef" class="stats">
        <div v-for="stat in stats" :key="stat.id">
          <div class="stat-num">{{ displayValues[stat.id] }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div class="bolt-stage" aria-hidden="true">
      <div class="ring" />
      <div class="ring ring-outer" />
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="boltgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#54e9ff" />
            <stop offset="1" stop-color="#8b6bf2" />
          </linearGradient>
        </defs>
        <path id="bolt-fill" d="M112 20 55 108h35l-14 72 68-96h-38z" fill="url(#boltgrad)" />
        <path
          id="bolt-path"
          d="M112 20 55 108h35l-14 72 68-96h-38z"
          fill="none"
          stroke="#54e9ff"
          stroke-width="3"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 5.5rem 0 4.5rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
}
.headline {
  font-size: clamp(2.4rem, 4.6vw, 3.6rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-top: 0.9rem;
}
.accent {
  color: var(--volt);
}
.lede {
  margin-top: 1.15rem;
  max-width: 46ch;
  color: var(--muted);
  font-size: 1.08rem;
}
.hero-cta {
  display: flex;
  gap: 0.9rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.stats {
  display: flex;
  gap: 2.4rem;
  margin-top: 2.6rem;
}
.stat-num {
  font-family: 'Chakra Petch', system-ui, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
}
.stat-label {
  color: var(--muted);
  font-size: 0.85rem;
}

.bolt-stage {
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bolt-stage svg {
  width: 78%;
  filter: drop-shadow(0 0 30px rgba(84, 233, 255, 0.35));
}
.ring {
  position: absolute;
  inset: 8%;
  border: 1px solid var(--line);
  border-radius: 50%;
}
.ring-outer {
  inset: 0;
}
#bolt-path {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: draw 1.6s ease forwards 0.2s;
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
#bolt-fill {
  opacity: 0;
  animation: fillin 0.6s ease forwards 1.7s;
}
@keyframes fillin {
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  #bolt-path {
    animation: none;
    stroke-dashoffset: 0;
  }
  #bolt-fill {
    animation: none;
    opacity: 1;
  }
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 2.5rem;
  }
  .bolt-stage {
    order: -1;
    max-width: 280px;
    margin-inline: auto;
  }
}
</style>
