import React from "react";
import classes from "./MealtemForm.module.css";
import Input from "../../UI/Input";
import { useContext } from "react";
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const AddHandler = (e) => {
    e.preventDefault();
    const quantity=Number(document.getElementById("Amount_" + props.id).value);
    cartCtx.addItem({...props.item,'quantity':quantity});
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={AddHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
