import { describe, it, expect, vi } from 'vitest'
import { isAnImage, convertStringToObject, toQueryString, waitFor } from '.'

describe('utils: isAnImage', () => {
  it('should return if url contain an Image', () => {
    expect(isAnImage('https://example.com/image.png')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpg')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpeg')).toEqual(true)
    expect(isAnImage('https://example.com/image.gif')).toEqual(true)
    expect(isAnImage('https://example.com/image.svg')).toEqual(true)
    expect(isAnImage('https://example.com/image.webp')).toEqual(true)
    expect(isAnImage('https://example.com/image')).toEqual(false)
    expect(isAnImage('https://example.com/image.json')).toEqual(false)
  })
})
describe('utils: convertStringToObject', () => {
  it('should convert a valid string to an object', () => {
    const str = '{"name": "John", "age": 30}'
    expect(convertStringToObject(str)).toEqual({ name: 'John', age: 30 })
  })

  it('should return an empty object if the string is empty', () => {
    const str = ''
    expect(convertStringToObject(str)).toEqual({})
  })
})

describe('utils: isAnImage', () => {
  it('should return true for valid image URLs', () => {
    expect(isAnImage('https://example.com/image.png')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpg')).toEqual(true)
    expect(isAnImage('https://example.com/image.jpeg')).toEqual(true)
    expect(isAnImage('https://example.com/image.gif')).toEqual(true)
    expect(isAnImage('https://example.com/image.svg')).toEqual(true)
    expect(isAnImage('https://example.com/image.webp')).toEqual(true)
  })

  it('should return false for non-image URLs', () => {
    expect(isAnImage('https://example.com/image')).toEqual(false)
    expect(isAnImage('https://example.com/image.json')).toEqual(false)
  })

  it('should return false for empty URLs', () => {
    expect(isAnImage()).toEqual(false)
  })
})

describe('toQueryString', () => {
  it('should return an empty string if params is null or undefined', () => {
    expect(toQueryString(null)).toBe('')
    expect(toQueryString(undefined)).toBe('')
  })

  it('should return a string with the format /{id} if params contains an id', () => {
    const params = { id: 123 }
    const result = toQueryString(params)
    expect(result).toBe('/123')
  })

  it.skip('should convert an object to a query string', () => {
    const params = { name: 'John', age: 30 }
    const result = toQueryString(params)
    expect(result).toBe('/?name=John&age=30')
  })

  it.skip('should handle null and undefined values within the object', () => {
    const params = { name: 'John', age: null, city: undefined }
    const result = toQueryString(params)
    expect(result).toBe('/?name=John')
  })

  it.skip('should handle arrays within the object', () => {
    const params = { name: 'John', hobbies: ['reading', 'gaming'] }
    const result = toQueryString(params)
    expect(result).toBe('/?name=John&hobbies=reading&hobbies=gaming')
  })

  it('should handle empty objects', () => {
    const params = {}
    const result = toQueryString(params)
    expect(result).toBe('/?')
  })

  it.skip('should handle special characters', () => {
    const params = { name: 'John Doe', city: 'New York' }
    const result = toQueryString(params)
    expect(result).toBe('/?name=John%20Doe&city=New%20York')
  })

  it.skip('should handle nested objects', () => {
    const params = { user: { name: 'John', age: 30 } }
    const result = toQueryString(params)
    expect(result).toBe('/?user=%5Bobject%20Object%5D')
  })
})

describe('utils: waitFor', () => {
  it('should resolve after the specified time', async () => {
    vi.useFakeTimers()
    const ms = 500
    const promise = waitFor(ms)

    vi.advanceTimersByTime(ms)

    await expect(promise).resolves.toBeUndefined()
    vi.useRealTimers()
  })

  it('should use the default value of 1000 ms if no argument is provided', async () => {
    vi.useFakeTimers()
    const promise = waitFor()

    vi.advanceTimersByTime(1000)

    await expect(promise).resolves.toBeUndefined()
    vi.useRealTimers()
  })
})
