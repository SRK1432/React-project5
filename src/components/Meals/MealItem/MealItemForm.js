import React,{useRef, useState} from "react";
import "./MealItemForm.css";

const MealItemForm=(props)=>{
    const [isValidInput, setIsValidInput] = useState(true);
    const amountInputRef = useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount; //to convert into string 

        if(enteredAmount.length===0 || enteredAmountNumber<1 ||enteredAmountNumber>5){
            setIsValidInput(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);

    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <label htmlFor="amount">Amount </label>
            <input ref={amountInputRef} 
            type="number" 
            id="amount" 
            min='1' max='5' 
            step='1' 
            defaultValue='1'/>
            <div>
                <button type="submit">+Add</button>
            </div>
        </form>
    )
}
export default MealItemForm;