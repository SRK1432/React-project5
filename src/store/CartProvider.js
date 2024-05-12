import CartContext from "./cart-context";
const CartProvider=(props)=>{
    const addCartHandler=(item)=>{

    }
    const removeCartHandler=(id)=>{

    }
    const cartContext = {
        items:[],
        totalAmount:0,
        addItem:addCartHandler,
        removeItem: removeCartHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;