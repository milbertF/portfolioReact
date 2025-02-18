import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigation from './components/nav'
import './style/nav.css'

import Hero from './components/hero'
import './style/hero.css'

import Aboutus from './components/aboutus'
import './style/aboutus.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='wrap'>

        <Navigation/>
        <Hero />
        <Aboutus />
      </div>
      
    </>
  )
}

export default App
