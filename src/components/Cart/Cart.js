import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  //const mySet=new Set()
  // cartCtx.items.forEach(element => {
    
  // });
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {


        return (
          <li className={classes.item} key={item.id}>
            <div>
              <span className={classes.name}>{item.name}</span>
              <div>
                <span className={classes.price}>{item.price}</span>
                <span className={classes.quantity}>{item.quantity}</span>
              </div>
            </div>
            <div className={classes.itemaction}>
              <button>-</button>
              <button>+</button>
            </div>
          </li>
        );
      })}
    </ul>
  );

  const handleOrder = () => {
    console.log("Ordering");
  };
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Cancel
        </button>
        <button onClick={handleOrder} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
