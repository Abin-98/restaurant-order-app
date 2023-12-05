import React from 'react'
import classes from './Header.module.css'
import Meals from '../../assets/Meals-008.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=> {
  return (<>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={Meals} alt='delicious food!'/>
    </div>
    </>
  )
}

export default Header
