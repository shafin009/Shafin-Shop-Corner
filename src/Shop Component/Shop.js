import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    useEffect = (() => {

        const [device, setdevice] = useState([]);
    
        fetch('myfile.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])



    return (
        <div className='shop'>
            <div className="shop-container">
                <h2>Here is Products</h2>
            </div>
            <div className="cart-container">
                <h2>Choosen Products</h2>
            </div>
        </div>
    );
};

export default Shop;