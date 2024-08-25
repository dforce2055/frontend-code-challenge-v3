import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import FavoriteIcon from './FavoriteIcon.vue'

const props = {
  active: false
}

describe('FavoriteIcon', () => {
  it('should render icon', () => {
    const wrapper = mount(FavoriteIcon, { props: { ...props } })
    expect(wrapper.find('[data-test="icon"]').exists()).toBe(true)
  })

  it('should render icon with active color', () => {
    const wrapper = mount(FavoriteIcon, {
      props: {
        ...props,
        active: true
      }
    })

    expect(wrapper.html()).toContain('#F2994A')
  })
  it('should render icon with inactive color', () => {
    const wrapper = mount(FavoriteIcon, {
      props: {
        ...props,
        active: false
      }
    })

    expect(wrapper.html()).toContain('#828282')
  })
})
