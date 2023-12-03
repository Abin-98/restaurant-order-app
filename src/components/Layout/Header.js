import React from 'react'
import './Header.css'
const Header=()=> {
  return (
    <header className='header'>
      <h1>React Meals</h1>
      <div>
        <h3>Your Cart</h3>
        <span className='header__span'>0</span>
      </div>
    </header>
  )
}

export default Header
