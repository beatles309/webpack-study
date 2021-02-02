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

/** 참, 거짓 여부 **/
it('toBeTruthly, toBeFalsy', () => {
  expect(isNumisFive(5)).toBeTruthy
  expect(isNumisFive(10)).toBeFalsy()
})

/** 배열의 길이, 원소 존재 여부 체크 **/
it('isHaveLength, toContatin', () => {
  const students = ["쥐냥", "향미", "상욱"]
  expect(students).toHaveLength(3)
  expect(students).toContain("쥐냥")
  expect(students).not.toContain("이건")
})

/** 일반 문자열은 보통 toBe()로 체크하는데 정규식은 toMatch() **/
it('toMatch', () => {
  expect(getObj('jh').email).toBe("jh@naver.com")
  expect(getObj('jh').email).toMatch(/.*naver.com$/)
})

/** 예외 처리 여부 **/
it('toThrow', () => {
  /** 이렇게 바로 써버리면 실제 에러가 발생해서 테스트가 실패함 **/
  //expect(getObj(-1)).toThrow('Invalid id')
  /** 요렇게 함수로 한번 감싸줘야지 정상 실행된다. **/
  expect(() => getObj(-1)).toThrow('Invalid id')
})


