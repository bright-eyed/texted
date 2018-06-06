import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignupForm from '../components/SignupForm'


class SignupContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
      isAuthenticated: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSignUp(e) {
    alert(this.state.email, this.state.password)
    e.preventDefault()
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <SignupForm
          handleChange={this.handleChange}
          handleSignUp={this.handleSignUp}
          goBack={this.goBack}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
      registering
  }
}

export default connect(mapStateToProps)(SignupContainer)
