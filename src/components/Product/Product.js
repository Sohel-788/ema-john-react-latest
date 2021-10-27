import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const {img,name,seller,stock,price}=props.product;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className='productImg'>
                <img src={img} alt="" />
            </div>
            <div className='productDiscription'>
                <h3><a href="/">{name}</a></h3>
                <h4>by: {seller}</h4>
                <p>Only {stock} item left-Order soon</p>
                <p>Price: ${price}</p>
                <button onClick={()=>props.handleAaddToCart(props.product)}  className='cartBtn'>{icon}add To cart</button>
            </div>
        </div>
    );
};

export default Product;