import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'


class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isAuthenticated: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin(e) {
    alert(this.state.email, this.state.password)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <LoginForm 
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  }
}

export default connect(mapStateToProps)(LoginContainer)
