import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CardSummary from './CardSummary';
import TotalCart from './TotalCart';

const Header = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;

        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount])

    const cartToggle = () => {
        return (
            <>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                            Cart
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <h2>CART SUMMARY</h2>

                        <div className="container">

                            {cart.map((item) => (
                                <CardSummary key={item.id} dataProduct={item}/>
                            ))}

                            <TotalCart/>

                            <div className="d-grid gap-2 py-4">
                                <Link to="/cart" className="btn btn-success" >Proceed to checkout</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </>);
    }


    return (
        <header >
            <nav className="navbar fixed-top bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white ms-5" to="/">E-commerce Page</Link>

                    <button className="btn btn-primary me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        Cart {' ' + cartCount}
                    </button>

                    <>
                        {cartToggle()}
                    </>

                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    cart: state.item.cart
})
export default connect(mapStateToProps)(Header);