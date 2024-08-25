export interface CharactersResponse {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Character {
  id: number
  name: string
  status: STATUS
  species: SPECIES
  type: string
  gender: GENDER
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export enum GENDER {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown'
}

export interface Location {
  name: string
  url: string
}

export enum SPECIES {
  ALIEN = 'Alien',
  HUMAN = 'Human'
}

export enum STATUS {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown'
}
