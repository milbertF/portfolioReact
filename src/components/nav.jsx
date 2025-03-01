import React, { Component } from 'react'
import meye from './../assets/meye.svg'

export class nav extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
            <img src={meye} alt="" />
        </div>
        <div className="nav">
          <details>
              <summary>My Works</summary>
              <div>
                <a href="">Study Case 1</a>
                <a href="">Study Case 2</a>
              </div>
              
          </details>
          <a href="">Contact</a>
        </div>
      </div>
    )
  }
}

export default nav