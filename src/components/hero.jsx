import React, { Component } from 'react'
import milbert from './../assets/milbert.png'
import fb from './../assets/fb.svg'
import ig from './../assets/ig.svg'

export class hero extends Component {
  render() {
    return (
      <div class="aboutme page page1">
          <div class="personal">
              <div class="personalCon">
                <div className="namewrap">
                  <h1>I'M MILBERT</h1>
                  <p>FRONTEND DEV / GRAPHIC DESIGNER / DIGITAL ARTIST</p>
                </div>
                  
                <div className="link">
                  <div className="social">
                    <img src={fb} alt="" />
                    <p>Facebook</p>
                  </div>
                  <div className="social">
                    <img src={ig} alt="" />
                    <p>Instagram</p>
                  </div>
                  
                </div>
                <div className="btn">
                  <button>Contact Me</button>
                </div>
              </div>
              
          </div>
          <div class="hero">
            <img src={milbert} alt="" />
          </div>
      </div>
    )
  }
}

export default hero