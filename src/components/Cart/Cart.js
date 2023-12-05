import Modal from '../Modal/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {

  const cartItems=(
    <ul className={classes['cart-items']}>
      {[{id:'c1', name:'Sushi', amount: 2, price: 12.99}].map(item=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
 
  const handleOrder=()=>{
    console.log('Ordering');
  }
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes['button--alt']}>Cancel</button>
        <button onClick={handleOrder} className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
