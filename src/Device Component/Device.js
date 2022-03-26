import React from 'react';
// import './Device.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Device = (props) => {
    const { name, picture, price } = props.device;


    return (

        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <button onClick={() => props.addcart(props.device)} type="button" className="btn btn-danger btn-sm">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

                </div>
            </div>
        </div>




    );
};

export default Device;