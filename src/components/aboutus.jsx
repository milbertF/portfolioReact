import React, { Component } from 'react'
import ai from './../assets/logos/ai.svg'
import css from './../assets/logos/css.svg'
import gh from './../assets/logos/gh.svg'
import html from './../assets/logos/html.svg'
import js from './../assets/logos/js.svg'
import ps from './../assets/logos/ps.svg'
import react from './../assets/logos/react.svg'
import pixel from './../assets/logos/pixel.jpeg'



export class aboutus extends Component {
  render() {
    return (
      <div className="aboutusCon">
        <div className="asCon">
            <div className="amHeadCon">
                <h2>ABOUT ME</h2>
                <h3>about me</h3>
            </div>
            <div className="amD">
                <div className="amBodyCon">
                    <p>Hi, I'm MILBERT FALCASANTOS, a FRONTEND DEVELOPER / GRAPHIC DESIGNER / DIGITAL ARTIST driven by a passion for crafting stunning and functional designs.</p>
                    <p>With over three years of experience in the creative industry, I’ve contributed to projects spanning branding, web design, digital illustration, and packaging. My journey as a creative professional has taught me that design goes beyond aesthetics — it’s about solving challenges, telling stories, and creating seamless user experiences that leave a lasting impression.</p>
                    <p>I take pride in staying up-to-date with the latest design trends and technologies, ensuring that every project I work on not only meets but exceeds expectations. Whether it's developing responsive websites, creating compelling brand identities, or designing visually engaging marketing materials, I bring dedication and creativity to every aspect of my work.</p>
                    <p>When I'm not immersed in design, I enjoy cycling through scenic trails, exploring new places to spark inspiration, and unwinding with a good movie or series. I believe that balance and curiosity fuel creativity, and I’m always excited to collaborate on innovative projects.</p>
                    <p>Let’s create something amazing together!</p>
                </div>
                <div className="amSkillCon">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img className='gh' src={gh} alt="" />
                    <img src={ps} alt="" />
                    <img src={ai} alt="" />
                    <img src={pixel} alt="" />
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}

export default aboutus