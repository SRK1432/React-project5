import React from "react";
import "./MealItemForm.css";

const MealItemForm=()=>{
    return (
        <form className="form">
            <label htmlFor="amount">Amount </label>
            <input type="number" id="amount" min='1' max='5' step='1' defaultValue='1'/>
            <div>
                <button type="submit">+Add</button>
            </div>
        </form>
    )
}
export default MealItemForm;