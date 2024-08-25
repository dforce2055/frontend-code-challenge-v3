export enum NotificationType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}

export enum TAB {
  ALL = 'All',
  UNKNOWN = 'Unknown',
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless'
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
