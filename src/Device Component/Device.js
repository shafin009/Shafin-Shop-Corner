import React from 'react';
import './Device.css'

const Device = (props) => {
    const { name, picture, price } = props.device;


    return (
        <div className='device'>
            <img src={picture} alt="" />
            <div className='device-name'>
                <h5>Name: {name}</h5>
                <h5>Price: {price}</h5>
            </div>
            <button onClick={() => props.cart(props.device)} className='cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Device;