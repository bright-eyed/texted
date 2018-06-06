import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from './helpers/history'

import LandingContainer from './containers/LandingContainer'
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';


class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <LandingContainer>
          <Route path='/login' component={ LoginContainer } />
          <Route path='/signup' component={ SignupContainer } />
        </LandingContainer>
      </Router>
    )
  }
}

export default App;
