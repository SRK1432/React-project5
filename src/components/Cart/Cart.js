import {useContext} from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart=(props)=>{
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler=(item)=>{
        cartCtx.addItem(item);
    }
    const cartItemRemoveHandler=(id)=>{
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className="cart-items">{cartCtx.items.map((item)=>
       <CartItem 
       key={item.id} 
       name={item.name} 
       amount={item.amount} 
       price={item.price} 
       onAdd={cartItemAddHandler.bind(null,item)} 
       onRemove={cartItemRemoveHandler.bind(null,item.id)}/>)}</ul>
    
    return(
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onHideCart}>close</button>
                {hasItems &&(<button className="button">Order</button>)}
            </div>
        </Modal>
    )
}
export default Cart;
