import React from 'react'
import classes from './Header.module.css'
import Meals from '../../assets/Meals-008.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header=()=> {
  return (<>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
      <img src={Meals} alt='delicious food!'/>
    </div>
    </>
  )
}

export default Header
