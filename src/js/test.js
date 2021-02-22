export function getObj (id) {
  if (id <= 0) throw new Error('Invalid id')
  return {
    id: 1,
    email: `${id}@naver.com`
  }
}

export function isNumIsFive (num) {
  return num === 5
}

export function fetchUsers (id, callback) {
  setTimeout(() => {
    console.log('wating 1 sec!!!!')
    const user = {
      id: id,
      email: `${id}@naver.com`,
      age: '15'
    }
    callback(user)
  }, 1000)
}

export function fetchUsersByPromise (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('wating 1 sec!!!!')
      const user = {
        id,
        email: `${id}@naver.com`,
        age: Number(id) + 10
      }
      resolve(user)
    }, 1000)
  })
}
