import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import './App.css'

export default function App() {
  return (
    <div>
      <div>
          <Navbar/>
      </div>
    <div className='content'>
          <Body/>
    </div>
  
    </div>
  )
}
