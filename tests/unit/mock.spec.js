import axios from 'axios'
import { caculator } from '@/js/test'
import { findOne } from '@/js/userService'

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
