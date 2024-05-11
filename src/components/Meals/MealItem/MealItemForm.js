import React from "react";
import "./MealItemForm.css"

const MealItemForm=()=>{
    return (
        <form className="form">
            <label htmlFor="amount">Amount </label>
            <input type="number" id="amount"/>
            <div>
                <button type="submit">+Add</button>
            </div>
        </form>
    )
}
export default MealItemForm;