import React from 'react'

import './App.css'
import Profile from './components/pages/Profile'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

const App = () => {
  return (
    <>
      <div className="App-header">
        <h1>Welcome to React</h1>
        <hr />
        <About />
        <Profile />
        <Contact />
      </div>
    </>
  )
}
export default App