import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './LoginForm.css'

class LoginForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <form onSubmit={this.props.handleLogin.bind(this)}>
          <input className='text-field'
            type='email' name='email'
            placeholder='email'
            onChange={this.props.handleChange.bind(this)}
          />
          <input className='text-field'
            type='password' name='password'
            placeholder='password'
            onChange={this.props.handleChange.bind(this)}
          />
          <input className='btn login-btn' type='submit' value='Sign in'/>
          <p>
            Don't you have an account?
            <span className='signup-link'><Link to='/signup'>Sign up</Link></span>
          </p>
        </form>
        
      </div>
    );
  }
}

export default LoginForm;
