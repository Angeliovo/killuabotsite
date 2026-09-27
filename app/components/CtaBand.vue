<template>
  <section class="wrap section">
    <div id="cta" class="cta-band">
      <div>
        <h2>Готов подключить бота?</h2>
        <p>Один клик — и модерация, музыка и игры уже работают на сервере.</p>
      </div>
      <a href="#" class="btn">Добавить в Discord</a>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 4.5rem 0;
}
.cta-band {
  background: linear-gradient(135deg, var(--surface), var(--surface-2));
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.cta-band h2 {
  font-family: 'Chakra Petch', system-ui, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  max-width: 26ch;
}
.cta-band p {
  color: var(--muted);
  margin-top: 0.5rem;
}
</style>
