import React from 'react'
import classes from './MealItem.module.css'
const MealItem=(props)=>{

    const price=`$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}> {props.description}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div className={classes['meal__right']}>
    <span className={classes.form}>
      <label className={classes.amount}>Amount</label>
      <input className={classes.input} type='number' min={0}/>
    </span>
    <button className={classes.btn}>+ Add</button>
    </div>
    </li>
  )
}

export default MealItem

