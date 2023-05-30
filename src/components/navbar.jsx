import React from 'react'
import './navbar.css'

export default function navbar() {
  return (
    <div>
         <div className="navbar">
        <h1 className="left-element">ChiPetPet</h1>
        <div className="right-elements">
          <h4 className="element">Hizmetlerimiz</h4>
          <h4 className="element">Bize Dair</h4>
          <h4 className="element">İletişim</h4>
        </div>
      </div>
    </div>
  )
}
