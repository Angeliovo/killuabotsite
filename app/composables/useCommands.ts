import { computed, ref } from 'vue'
import type { BotCommand, CommandCategory } from '~/types/command'

const COMMANDS: BotCommand[] = [
  { name: '/ban', desc: 'Забанить участника с указанием причины', cat: 'Модерация' },
  { name: '/kick', desc: 'Выгнать участника с сервера', cat: 'Модерация' },
  { name: '/mute', desc: 'Замьютить на заданное время', cat: 'Модерация' },
  { name: '/warn', desc: 'Выдать предупреждение и записать в лог', cat: 'Модерация' },
  { name: '/clear', desc: 'Удалить до 100 сообщений разом', cat: 'Модерация' },
  { name: '/automod', desc: 'Настроить автоматическую фильтрацию спама', cat: 'Модерация' },
  { name: '/play', desc: 'Включить трек по ссылке или названию', cat: 'Музыка' },
  { name: '/queue', desc: 'Показать очередь треков', cat: 'Музыка' },
  { name: '/skip', desc: 'Пропустить текущий трек', cat: 'Музыка' },
  { name: '/playlist', desc: 'Сохранить или загрузить плейлист сервера', cat: 'Музыка' },
  { name: '/volume', desc: 'Настроить громкость воспроизведения', cat: 'Музыка' },
  { name: '/hangman', desc: 'Начать игру в виселицу', cat: 'Игры' },
  { name: '/guess', desc: 'Угадай число за наименьшее число попыток', cat: 'Игры' },
  { name: '/duel', desc: 'Вызвать участника на дуэль', cat: 'Игры' },
  { name: '/rank', desc: 'Показать уровень и опыт на сервере', cat: 'Игры' },
  { name: '/leaderboard', desc: 'Таблица лидеров сервера по опыту', cat: 'Игры' }
]

export const CATEGORIES: Array<CommandCategory | 'all'> = ['all', 'Модерация', 'Музыка', 'Игры']

/**
 * Reactive search + category filter over the static command list.
 * Kept as a composable so both the desktop panel and any future
 * mobile/command-palette view can share the same filtered state.
 */
export function useCommands() {
  const query = ref('')
  const activeCategory = ref<CommandCategory | 'all'>('all')

  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    return COMMANDS.filter((command) => {
      const matchesCategory = activeCategory.value === 'all' || command.cat === activeCategory.value
      const matchesQuery =
        !q || command.name.toLowerCase().includes(q) || command.desc.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  })

  function setCategory(cat: CommandCategory | 'all') {
    activeCategory.value = cat
  }

  return { query, activeCategory, filtered, setCategory, total: COMMANDS.length }
}
