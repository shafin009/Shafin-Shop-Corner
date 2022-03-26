import React, { useEffect, useState } from 'react';
import './Shop.css'
import Device from '../Device Component/Device';
import 'bootstrap/dist/css/bootstrap.min.css';


const Shop = () => {

    const [devices, setdevices] = useState([]);

    const [carts, setcarts] = useState([]);




    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setdevices(data))
    }, []);


    const addcart = (device) => {
        if (carts.length <= 3) {
            const newCart = [...carts, device];
            setcarts(newCart);
        }
        else {
            alert('sorry!only allow 4 items')
        }
    }
    const remove = () => {
        setcarts([]);
    }








    return (
        <div className='container d-flex justify-content-between'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>

                {
                    devices.map(device => <Device
                        key={device.id}
                        device={device}
                        addcart={addcart}

                    ></Device>)
                }

            </div>

            <div className='item'>
                <h3>Item Choose</h3>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button">Choose any 1</button>
                    <button onClick={() => remove()} className="btn btn-primary" type="button">Remove All</button>
                </div>
                <ol>
                    {
                        carts.map(cart => <li
                            key={cart.id}
                        >Name: {cart.name}

                        </li>)

                    }

                </ol>

            </div>



        </div>





    );

};

export default Shop;