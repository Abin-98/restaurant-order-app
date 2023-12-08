import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  cartCtx.totalAmount = cartCtx.items
    .reduce((total, item) => {
      return total + Number(item.price) * Number(item.quantity);
    }, 0)
    .toFixed(2);

  const reduceHandler = (e) => {
    const ID = e.target.parentElement.parentElement.id;
    cartCtx.removeItem(ID);
  };
  const increaseHandler = (e) => {
    const ID = e.target.parentElement.parentElement.id;
    const index = cartCtx.items.findIndex((element) => element.id === ID);
    const targetItem = {...cartCtx.items[index]}
    targetItem.quantity=1;
    cartCtx.addItem(targetItem);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <li className={classes.item} id={item.id} key={item.id}>
            <div className={classes.itemBox}>
              <span className={classes.name}>{item.name}</span>
              <div className={classes.itemDesc}>
                <span className={classes.price}>${item.price}</span>
                <span className={classes.quantity}>x{item.quantity}</span>
              </div>
            </div>
            <div className={classes["item-action"]}>
              <button onClick={reduceHandler}>-</button>
              <button onClick={increaseHandler}>+</button>
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
        <span>{cartCtx.totalAmount}</span>
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
