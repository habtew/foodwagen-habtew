import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Header />
      <Hero />
    </div>
  )
}

export default App
