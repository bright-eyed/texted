import React, { Component } from 'react';

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
        </form>
      </div>
    );
  }
}

export default LoginForm;
