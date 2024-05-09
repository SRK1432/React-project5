import AvailableMeals from "./AvailableMeals";
import MealSummery from "./MealSummery";
import React, { Fragment } from "react";
const Meals=()=>{
    return(
        <Fragment>
        <AvailableMeals />
        <MealSummery />
        </Fragment>
    )
}
export default Meals;