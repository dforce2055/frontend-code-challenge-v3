import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from './Button.vue'

const props = {
  text: 'Click me',
  type: 'primary'
}

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { ...props } })
    expect(wrapper.text()).toContain(props.text)
    expect(wrapper.html()).toContain('button-primary')
  })
  it('emits click event', async () => {
    const wrapper = mount(Button, { props: { ...props } })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
