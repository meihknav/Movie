import { useContext } from "react";
import CartConText from "../../../store/cart-context";
import classes from "../MealItem/MealItem.module.css";
import MealItemForm from "./MealItemForm";


const MealItem = (props) => {

  console.log('MealItem Running...')

  const cartCtx = useContext(CartConText);


  const addItemsOrderHandler = (amount) => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddCart={addItemsOrderHandler} />
      </div>
    </li>
  );
};
export default MealItem;
