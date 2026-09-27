# Killua Bot — Nuxt 4 + TypeScript + Vue

Лендинг Discord-бота на Nuxt 4 (Vue 3.5, TypeScript 5.9, `<script setup lang="ts">`) — самые свежие стабильные версии на сентябрь 2026.

## Запуск

```bash
npm install
npm run dev
```

Откроется на `http://localhost:3000`.

Сборка для продакшена:

```bash
npm run build   # серверный билд
npm run generate  # статическая генерация (можно захостить как обычный html/css/js)
```

## Структура проекта

```
app/                          # начиная с Nuxt 4 всё приложение живёт здесь
  app.vue                     # корневой layout: фон + сборка секций
  components/
    AppHeader.vue              # шапка, мобильное меню (ref/reactive state)
    HeroSection.vue             # герой, анимация молнии, счётчики через IntersectionObserver
    FeaturesSection.vue         # три карточки модулей
    CommandsExplorer.vue        # поиск + фильтр команд (использует composable)
    DevsSection.vue             # карточки разработчиков
    CtaBand.vue                 # финальный призыв к действию
    AppFooter.vue                # футер
    BoltIcon.vue                 # переиспользуемая svg-иконка молнии
  composables/
    useCommands.ts               # реактивные поиск/фильтр по списку команд (типизировано)
  types/
    command.ts                   # BotCommand, BotStat, Developer — общие типы
  assets/css/
    main.css                     # дизайн-токены (CSS-переменные), сброс стилей, общие классы
public/
  favicon.svg
nuxt.config.ts
package.json
```

Импорты (`~/types/command`, `~/composables/useCommands`) не меняются — алиас `~` в Nuxt 4 указывает на `app/`, так что весь код внутри работает как раньше.

## Как редактировать контент

- **Команды бота** — правь массив `COMMANDS` в `composables/useCommands.ts`, всё остальное (поиск, фильтры, счётчик) обновится само.
- **Статистика в hero** — массив `stats` в `HeroSection.vue`.
- **Модули (Модерация/Музыка/Игры)** — массив `features` в `FeaturesSection.vue`.
- **Разработчики** — массив `developers` в `DevsSection.vue`.
- **Цвета/шрифты** — CSS-переменные в `assets/css/main.css` (`--volt`, `--violet`, `--surface` и т.д.).

## Стек

- Nuxt 3 (auto-imports компонентов и composables)
- Vue 3 `<script setup>` + TypeScript (строгий режим включён в `nuxt.config.ts`)
- Обычный CSS с переменными — без Tailwind, чтобы дизайн оставался полностью под контролем
