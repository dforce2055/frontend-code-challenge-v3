import type { CharactersResponse, GENDER, SPECIES, STATUS } from '../types'
import { toQueryString } from '../utils'
const BASE_URL = import.meta.env.VITE_BASE_URL

const path = {
  characters: `${BASE_URL}/character`,
  locations: `${BASE_URL}/location`,
  episodes: `${BASE_URL}/episode`
}

export interface CharacterFilterParams {
  name?: string
  status?: STATUS
  species?: SPECIES
  type?: string
  gender?: GENDER
}

export const getCharacters = async (
  params?: CharacterFilterParams
): Promise<CharactersResponse> => {
  try {
    const pathWithParams = params ? path.characters + '/?' + toQueryString(params) : path.characters
    // debugger
    const response = await fetch(pathWithParams, {
      method: 'GET',
      cache: 'force-cache'
    })

    const charactersResponse: CharactersResponse = await response.json()

    return charactersResponse
  } catch (error: any) {
    throw new Error(error)
  }
}
