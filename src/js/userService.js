import axios from 'axios'
import { sendEmail, sendSMS } from '@/js/messageService'

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

export function findOne () {
  const url = '/api/aaa/v1/internal/account'
  return axios.get(url).then(result => result.data)
}

export function registerUser (user) {
  const message = '회원 가입 되었습니다.'
  sendEmail(user.email, message)
  sendSMS(user.phone, message)
}

export function deRegisterUser (user) {
  const message = '회원 탈퇴 되었습니다.'
  sendEmail(user.email, message)
  sendSMS(user.phone, message)
}
