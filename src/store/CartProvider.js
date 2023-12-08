import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {
    const [items, setItems]=useState([]);

    const addItemToCartHandler=(item)=>{
      const index=items.findIndex((element)=>element.id===item.id);
      if(index===-1){
        setItems([...items, item]);}
        else{
          const dupItems=[...items];
          dupItems[index].quantity+=Number(item.quantity);
          setItems([...dupItems]);
        }
    }
    const removeItemFromCartHandler=(ID)=>{
        const dupItem=items.map(item=>{
          if(item.id===ID){
            item.quantity-=1;
          }
          return item;
        })
        setItems(dupItem);
    }
    const cartContext={
        items:items,
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
