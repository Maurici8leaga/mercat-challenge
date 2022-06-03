import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const TotalCart = ({ cart }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])

    return (
        <div className="d-flex justify-content-between ms-4">
            <h5> Total: ({totalItems} Items) </h5>
            <div className="text-warning fs-5">$ {totalPrice}</div>
        </div>

    )
}

const mapStateToProps = state => ({
    cart: state.item.cart
})

export default connect(mapStateToProps)(TotalCart);