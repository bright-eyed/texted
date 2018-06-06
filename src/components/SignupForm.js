import React, { Component } from 'react';

import './LoginForm.css'

class SignupForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <form onSubmit={this.props.handleSignUp.bind(this)}>
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
          <input className='text-field'
            type='password' name='passwordCheck'
            placeholder='password again'
            onChange={this.props.handleChange.bind(this)}
          />
          <input className='btn login-btn' type='submit' value='Sign up'/>
          <p>
            <span className='signup-link' onClick={this.props.goBack.bind(this)}>Go back</span>
          </p>
        </form>
      </div>
    );
  }
}

export default SignupForm;
