import axios from 'axios'
import { caculator } from '@/js/test'
import { findOne, registerUser, deRegisterUser } from '@/js/userService'
import { sendSMS, sendEmail } from '@/js/messageService'

jest.mock('@/js/messageService')
jest.mock('axios')

describe('mock', () => {
  const mockFn = jest.fn()

  it('fn()', () => {
    mockFn.mockReturnValue('뚱냐뤼')
    console.log(mockFn(1, '음냐뤼'))

    mockFn.mockResolvedValue('이거슨 promise의 resolve!!!')
    mockFn().then(result => console.log(result))

    mockFn.mockImplementation((name) => `my name is ${name}`)
    console.log(mockFn('쥐냥쥐냥'))

    expect(mockFn).toBeCalledTimes(3) ///함수가 호출된 횟수
    expect(mockFn).toBeCalledWith(1, '음냐뤼')
    expect(mockFn).toBeCalledWith('쥐냥쥐냥')
    expect(mockFn).toBeCalledWith('뚱냐뤼')
  })

  it('spyOn', () => {
    const spyFn = jest.spyOn(caculator, 'add')
    const result = caculator.add(2,3)

    expect(spyFn).toBeCalledTimes(1)
    expect(spyFn).toBeCalledWith(2,3)
    expect(result).toEqual(5)
  })

  it('mock 예제', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: '쥐냥쥐냥',
        age: 32,
        obj: {
          aaa: 'bbb'
        }
      }
    })
    const user = await findOne()

    //expect(user).toEqual({ id: 1, name: '쥐냥쥐냥', age: 32 })
    expect(user).toHaveProperty('id', 1)
    expect(user).toHaveProperty('obj.aaa', 'bbb')
  })
})

describe('mocking을 이용한 모듈 mocking', () => {
  beforeEach(() => {
    sendEmail.mockClear()
    sendSMS.mockClear()
  })

  const user = {
    email: 'test@naver.com',
    phone: '010-1234-5678'
  }

  it('register', () => {
    registerUser(user)

    expect(sendEmail).toBeCalledTimes(1)
    expect(sendEmail).toBeCalledWith('test@naver.com', '회원 가입 되었습니다.')
  })

  it('deRegister', () => {
    deRegisterUser(user)

    expect(sendEmail).toBeCalledTimes(1)
    expect(sendEmail).toBeCalledWith('test@naver.com', '회원 탈퇴 되었습니다.')
  })
})

describe('외부 모듈 mocking하기', () => {
  it('findOne', async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: '쥐냥쥐냥'
      }
    })

    const user = await findOne(1)

    expect(user).toHaveProperty('id', 1)
    expect(user).toHaveProperty('name', '쥐냥쥐냥')
    expect(axios.get).toBeCalledTimes(1)
  })
})
