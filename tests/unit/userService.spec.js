import {
  getUsers,
  addUser,
  deleteUser
} from '../../src/js/userService'
const data = require('../../src/js/userData')

///테스트를 group화 하는 describe
describe('전후처리 테스트', () => {
  beforeAll(() => {
    /// 전체 테스트 전 한번 호출 되는 함수(db connect 등 작업...)
  })
  afterAll(() => {
    /// 전체 테스트 후 한번 호출 되는 함수(connection close 등)
  })
  ///각 테스트 함수 실행 전 실행되는 코드(data 생성 등의 공통 작업)
  beforeEach(() => {
    data.users.push(
      { id: 1, name: '쥐냥쥐냥', age: 32 },
      { id: 2, name: '향장군', age: 34 },
      { id: 3, name: '쌍욱이', age: 27 }
    )
  })
  ///각각 테스트 함수 실행 후 실행되는 코드(데이터 초기화 작업 등)
  afterEach(() => {
    data.users.splice(0)
  })

  it('test 사전 작업을 하지 않아 실패 하는 예', () => {
    const users = getUsers()

    expect(users).toHaveLength(3)
    expect(users).toContainEqual({ id: 1, name: '쥐냥쥐냥', age: 32 })
    expect(users).toContainEqual({ id: 2, name: '향장군', age: 34 })
    expect(users).toContainEqual({ id: 3, name: '쌍욱이', age: 27 })
  })

  /// it과 test는 똑같이 테스트의 단위다 Mocha등 이전 사용하던 테스트 util에서는 it을 사용했던 덧
  test('test 사전 작업을 하지 않아 실패 하는 예', () => {
    addUser({ id: 1, name: '거니', age: 25 })
    const users = getUsers()

    expect(users).toHaveLength(1)
    expect(users).toContainEqual({ id: 1, name: '거니', age: 25 })
  })

  test('destory', () => {
    const id = 3
    const user = data.users.find(user => user.id === id)

    deleteUser(id)
    const users = getUsers()

    expect(users).toHaveLength(2)
    expect(users).not.toContainEqual(user)
  })

  ///only를 붙히면 해당 test 함수만 실행
  test.only('only', () => {
    console.log('뿌잉뿌잉뿌에에에에헹!!!!!!!')
  })

  /// skip을 붙히면 해당 테스트 함수는 제외하고 실행
  test.skip('skip', () => {
    console.log('뚜에악')
  })
})
