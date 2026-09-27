<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap foot-row">
      <span>© {{ year }} Killua Bot. Все права защищены.</span>
      <div class="foot-links">
        <a href="#features">Функции</a>
        <a href="#commands">Команды</a>
        <a href="#devs">Команда</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 2.4rem 0;
  color: var(--muted);
  font-size: 0.85rem;
}
.foot-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.foot-links {
  display: flex;
  gap: 1.4rem;
}
.foot-links a:hover {
  color: var(--text);
}
</style>
