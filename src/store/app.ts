import type { Character } from '@/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    characters: [] as Character[]
  }),
  actions: {
    setCharacters(characters: Character[]) {
      this.characters = characters
    }
  }
})
