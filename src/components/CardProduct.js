import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';
import { addCart } from '../actions/indexAction';


const CardProduct = ({ product, addCart }) => {

    const { name, type, image, price, id } = product;
    return (
        <div className="card card-width ">
            <img src={image} className="card-img-top" alt="product" />
            <div className="card-body text-color-white">
                <h5 className="card-title ">{name}</h5>
                <p className="card-text text-secondary">Type: {type}</p>
                <p className="card-text text-success"> ${price}</p>
                <div className="d-grid gap-2 py-4">
                    <button className="btn btn-primary" onClick={() => addCart(id)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}



export default connect(null, { addCart })(CardProduct);
