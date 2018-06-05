import React, { Component } from 'react'
import Typist from 'react-typist'

import LoginForm from '../components/LoginForm'

import './LandingContainer.css'

class LandingContainer extends Component {
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
      <div className='landing-container'>
        <div className='landing-left-panel'>
          <Typist className='landing-title'
            cursor={{ 
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: false }}>
            Texted.
            <Typist.Delay ms={1250} />
            <br />
            <span className='line-cursur'>></span>
          </Typist>
        </div>
        <div className='landing-right-panel'>
          <h1>Write only, but whatever</h1>
          <LoginForm 
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
          />
          <p>Don't you have an account? <span className='signup-link'>Sign up</span></p>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
