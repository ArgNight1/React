import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcShop } from "react-icons/fc";
import { CartContext } from './CartContext';
//BsShop

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    return(
        <Link to="/cart">
        <div className="cart-widget">
            <h4><FcShop/><button style={{ backgroundColor: '#0f0e17', color: '#ff8906', border: 'none' }}>{getQuantity()}</button></h4>
        </div>
        </Link>
    )
    
}
export default CartWidget