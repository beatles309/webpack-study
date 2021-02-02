export function getObj(id) {
  if (id <= 0) throw new Error('Invalid id')
  return {
    id: 1,
    email: `${id}@naver.com`
  }
}

export function isNumisFive(num) {
  return num === 5
}
