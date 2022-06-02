import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';
import { addCart } from '../actions/indexAction';


const CardProduct = ({product, addCart}) => {

    const { name, type, image, price, id } = product;
    return (
        <div className="card card-width">
            <img src={image} className="card-img-top" alt="product" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Type : {type}</p>
                <p className="card-text">Price ${price}</p>
                <button className="btn btn-primary" onClick={() => addCart(id)}>Add to cart</button>
            </div>
        </div>
    )
}



export default connect(null, {addCart}) (CardProduct);
