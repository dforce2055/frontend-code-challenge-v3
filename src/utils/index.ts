export const convertStringToObject = (str: string) => {
  if (!str) return {}
  try {
    return JSON.parse(str)
  } catch (error) {
    console.error('Error parsing string to object', error)
    return {}
  }
}

export const isAnImage = (url?: string) => {
  if (!url) return false

  if (
    url?.endsWith('.png') ||
    url?.endsWith('.jpg') ||
    url?.endsWith('.jpeg') ||
    url?.endsWith('.gif') ||
    url?.endsWith('.webp') ||
    url?.endsWith('.svg')
  ) {
    return true
  }

  return false
}

export const scrollTop = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const scrollToComponent = (
  component: Element | null,
  behavior?: ScrollBehavior,
  block?: ScrollLogicalPosition,
  inline?: ScrollLogicalPosition
): void => {
  if (component) {
    component.scrollIntoView({
      behavior: behavior ?? 'smooth',
      block: block ?? 'center',
      inline: inline ?? 'nearest'
    })
  }
}

export const toQueryString = (params: any) => {
  const queryString = new URLSearchParams(params).toString()
  return queryString
}
