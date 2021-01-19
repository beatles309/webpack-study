import { shallowMount } from '@vue/test-utils'
import Test from '@/components/Test.vue'
import axios from 'axios'

jest.mock('axios', () => ({
  get: Promise.resolve('테스트 result')
}))

it('axios mock test', () => {
  const wrapper = shallowMount(Test)
  wrapper.find('button').trigger('click')
  expect(wrapper.text()).toBe('테스트 result')
})
