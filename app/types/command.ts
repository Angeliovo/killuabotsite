export type CommandCategory = 'Модерация' | 'Музыка' | 'Игры'

export interface BotCommand {
  name: string
  desc: string
  cat: CommandCategory
}

export interface BotStat {
  id: string
  label: string
  target: number
  suffix: string
}

export interface Developer {
  initials: string
  name: string
  role: string
}
