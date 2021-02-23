const data = require('./userData')

export function getUsers () {
  return data.users
}

export function addUser (user) {
  data.users.push(user)
}

export function deleteUser (id) {
  data.users.splice(data.users.findIndex(user => user.id === id))
}

export function updateUser (newUser) {
  data.users[data.users.findIndex(user => user.id === newUser.id)] = newUser
}
