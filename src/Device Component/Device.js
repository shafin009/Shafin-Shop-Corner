import React from 'react';
import './Device.css'

const Device = (props) => {
    const { name, picture, price } = props.device;


    return (
        <div className='device'>
            <img src={picture} alt="" />
            <h5 className='device-name'>Name:{name}</h5>
            <h5 className='device-name'>Price:{price}</h5>
        </div>
    );
};

export default Device;