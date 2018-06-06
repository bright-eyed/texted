import axios from 'axios'

export const userService = {
  login,
  logout,
  signup,
}

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' }
});

function login (email, password) {
  let data = JSON.stringify({
    email: email,
    password: password
  })
  instance.post('/auth/login', data)
  .then((response) => {
    return response.json()
  })
  .then((user) => {
    if (user && user.token) localStorage.setItem(user, JSON.stringify(user))
    return user
  })
  .catch((error) => {Promise.reject(error.statusText)})
}

function logout () {
  localStorage.removeItem('user')
}

function signup (email, password) {
  let data = JSON.stringify({
    email: email,
    password: password
  })
  instance.post('/auth/register', data)
  .then((response) => {
    return response.json()
  })
  .catch((error) => {Promise.reject(error.statusText)})
}