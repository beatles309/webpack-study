import { shallowMount } from '@vue/test-utils'
import Test from '@/components/HelloWorld.vue'

describe('Test.vue', () => {
  it('button을 click 할때마다 count가 증가함', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
