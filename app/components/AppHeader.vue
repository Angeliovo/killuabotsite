<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu(): void {
  isOpen.value = !isOpen.value
}

function closeMenu(): void {
  isOpen.value = false
}
</script>

<template>
  <header class="header">
    <nav class="nav wrap">
      <a href="#top" class="brand" @click="closeMenu">
        <BoltIcon :size="22" class="brand-bolt" />
        Killua Bot
      </a>

      <div class="navlinks" :class="{ open: isOpen }">
        <a href="#features" @click="closeMenu">Функции</a>
        <a href="#commands" @click="closeMenu">Команды</a>
        <a href="#devs" @click="closeMenu">Команда</a>
        <a href="#cta" class="btn btn-small" @click="closeMenu">Добавить бота</a>
      </div>

      <button
        class="menu-btn"
        :aria-expanded="isOpen"
        aria-controls="navlinks"
        aria-label="Открыть меню"
        @click="toggleMenu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  padding-top: env(safe-area-inset-top, 0px);
  background: rgba(6, 7, 12, 0.72);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Chakra Petch', system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}
.brand-bolt {
  color: var(--volt);
}
.navlinks {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.95rem;
  color: var(--muted);
}
.navlinks a:hover {
  color: var(--text);
}
.btn-small {
  padding: 0.5rem 1.1rem;
}
.menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
}

@media (max-width: 860px) {
  .navlinks {
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    background: var(--void);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 6%;
    gap: 1rem;
    transform: translateY(-130%);
    transition: transform 0.25s ease;
  }
  .navlinks.open {
    transform: translateY(0);
  }
  .menu-btn {
    display: block;
  }
}
</style>
