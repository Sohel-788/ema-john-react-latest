import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    const cartReducer=(previous,product)=>previous+product.price;
    const total=cart.reduce(cartReducer,0)
    let shipping=total>0?15:0;
    const vat=(total/100)*15;
    const grandTotal=(total+shipping+vat)
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Orderd: {props.cart.length}</h4>
            <h4>Total: ${total.toFixed(2)}</h4>
            <h4>Shipping: ${shipping}</h4>
            <h4>Vat: ${vat.toFixed()}</h4>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button className='placeBtn'>Place Order</button>
        </div>
    );
};

export default Cart;