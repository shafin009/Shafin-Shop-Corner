import React, { useEffect, useState } from 'react';
import './Shop.css'
import Device from '../Device Component/Device';

const Shop = () => {

    const [devices, setdevices] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setdevices(data))
    }, []);


    const cart = (device) => {
        console.log(device);



    }


    return (
        <div className='shop'>

            <div className="shop-container">

                {
                    devices.map(device => <Device
                        key={device.id}
                        device={device}
                        cart={cart}

                    ></Device>)
                }
            </div>
            <div className="cart-container">
                <h2>Choosen Products</h2>
            </div>
        </div>
    );
};

export default Shop;