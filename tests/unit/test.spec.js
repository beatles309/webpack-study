import { getObj, isNumisFive } from '../../src/js/test'
//import axios from 'axios'

// jest.mock('axios', () => ({
//   get: Promise.resolve('테스트 result')
// }))
//
// it('axios mock test', () => {
//   const wrapper = shallowMount(Test)
//   wrapper.find('button').trigger('click')
//   expect(wrapper.text()).toBe('테스트 result')
// })

it('toEqual', () => {
  expect(getObj('jh')).toEqual({
    id: 1,
    email: `jh@naver.com`
  })
})

it('toBe', () => {
  expect(getObj('jh')).toBe({
    id: 1,
    email: `jh@naver.com`
  })
})

it('isTruthly', () => {
  expect(isNumisFive(5)).toBeTruthy()
})
