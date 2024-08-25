import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CardInfo from './CardInfo.vue'

const props = {
  inputText: 'input text',
  title: 'Title test',
  description: 'Description test',
  showIcon: true
}

describe('CardInfo', () => {
  it('renders properly', () => {
    const wrapper = mount(CardInfo, { props: { ...props } })
    expect(wrapper.text()).toContain(props.inputText)
    expect(wrapper.text()).toContain(props.title)
    expect(wrapper.text()).toContain(props.description)
  })

  it('should render icon', () => {
    const wrapper = mount(CardInfo, { props: { ...props } })
    expect(wrapper.find('[data-test="icon"]').exists()).toBe(true)
  })

  it('should NO render icon', () => {
    const wrapper = mount(CardInfo, {
      props: {
        ...props,
        showIcon: false
      }
    })
    expect(wrapper.find('[data-test="icon"]').exists()).toBe(false)
  })
})
