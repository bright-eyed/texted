import React, { Component } from 'react'
import Typist from 'react-typist'

import './LandingContainer.css'

class LandingContainer extends Component {
  render() {
    return (
      <div className='landing-container'>
        <div className='landing-left-panel'>
          <Typist className='landing-title'
            cursor={{ 
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: false
            }}
          >
            Texted.
            <Typist.Delay ms={1250} />
            <br />
            <span className='line-cursur'>></span>
          </Typist>
        </div>
        <div className='landing-right-panel'>
          <h1>Write only, but whatever</h1>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default LandingContainer
