import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAaddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    products.map(product=><Product
                    product={product}
                    key={product.key}
                   handleAaddToCart={handleAaddToCart}
                    ></Product>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;