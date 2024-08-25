import type { Character } from '@/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    characters: [] as Character[],
    favorites: [] as Character[]
  }),
  actions: {
    setCharacters(characters: Character[]) {
      this.characters = characters
    },
    setFavorites(characters: Character[]) {
      this.characters = characters
    },
    addFavorite(character: Character) {
      this.favorites.push(character)
    },
    removeFavorite(character: Character) {
      const index = this.favorites.findIndex((c) => c.id === character.id)
      if (index !== -1) this.favorites.splice(index, 1)
    }
  }
})
