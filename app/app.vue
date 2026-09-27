<template>
  <div id="top">
    <div class="field" aria-hidden="true" />
    <AppHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <CommandsExplorer />
      <DevsSection />
      <CtaBand />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.field {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(60vw 60vw at 82% -8%, rgba(139, 107, 242, 0.16), transparent 60%),
    radial-gradient(50vw 50vw at 8% 18%, rgba(84, 233, 255, 0.09), transparent 60%), var(--void);
}
</style>
