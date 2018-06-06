import { userConstants } from '../constants'
import { userService } from '../services'
import { alertActions } from './'
import { history } from '../helpers'

export const userActions = {
  login,
  logout,
  signup,
}

function login(email, password) {
  return dispatch => {
      dispatch(request({ email }))

      userService.login(email, password)
          .then(
              user => { 
                  dispatch(success(user))
                  history.push('/')
              },
              error => {
                  dispatch(failure(error))
                  dispatch(alertActions.error(error))
              }
          )
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

function signup(email, passowrd) {
  return dispatch => {
      dispatch(request(email))

      userService.register(email, password)
          .then(
              user => { 
                  dispatch(success())
                  history.push('/login')
                  dispatch(alertActions.success('정상적으로 가입되었습니다'))
              },
              error => {
                  dispatch(failure(error))
                  dispatch(alertActions.error(error))
              }
          )
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}