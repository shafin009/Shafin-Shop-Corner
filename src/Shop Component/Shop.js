import React, { useEffect, useState } from 'react';
import './Shop.css'
import Device from '../Device Component/Device';
import 'bootstrap/dist/css/bootstrap.min.css';


const Shop = () => {

    const [devices, setdevices] = useState([]);

    const [cart, setcart] = useState([]);




    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setdevices(data))
    }, []);


    const addcart = (device) => {
        if (cart.length <= 3) {
            const newCart = [...cart, device];
            setcart(newCart);
        }
        else {
            alert('sorry!only allow 4 items')
        }
    }
    const remove = () => {
        setcart([]);
    }

    const chooseOne = (selecteditem) => {
        const newCart = [...cart, selecteditem]
        return newCart[Math.floor(Math.random() * newCart.length)]



    };
    const chooseOneCart = () => {

        const randomItem = chooseOne();
        const randomProduct = cart.filter((item) => item === randomItem)
        setcart(randomProduct)

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
                    <button onClick={chooseOneCart} className="btn btn-primary me-md-2" type="button">Choose any 1</button>
                    <button onClick={() => remove()} className="btn btn-primary" type="button">Remove All</button>
                </div>
                <ol>
                    {
                        cart.map(cart => <li
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