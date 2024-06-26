import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import "./HeaderCartButton.css";

const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)
    return(
    <button className="button" onClick={props.onclicking}>
        <span className="icon">
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>

    </button>
    )
}
export default HeaderCartButton;