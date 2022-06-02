import React from 'react';
import '../css/index.css';


const CardProduct = ({product}) => {

    const { name, type, image, price } = product;
    return (
        <div className="card card-width">
            <img src={image} className="card-img-top" alt="product" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Type : {type}</p>
                <p className="card-text">Price ${price}</p>
                <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    )
}

export default CardProduct;
