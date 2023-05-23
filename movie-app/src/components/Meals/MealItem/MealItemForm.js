import { useState,useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


const MealItemForm = (props) => {
  console.log('Add running...')
  const amountInput = useRef();

  const [amountisValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault(); 

    const enteredAmount = amountInput.current.value;
    const enterAmountNumber = +enteredAmount;
    if( enteredAmount.trim().length === 0 || enterAmountNumber < 0|| enterAmountNumber > 5) {
      setAmountIsValid(false)
      return ;
    }
    props.onAddCart(enterAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref = {amountInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountisValid && <p> Please type again </p>}
    </form>
  );
};

export default MealItemForm;
