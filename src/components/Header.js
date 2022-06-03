import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartSummary from './CartSummary';
import TotalCart from './TotalCart';
import cartLogo from '../extras/cart.svg';

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
                <div className="offcanvas offcanvas-end color-light" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">

                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close">
                        </button>
                    </div>
                    <div className="offcanvas-body text-white">
                        <h2 className="text-center mb-4">Cart Summary</h2>

                        <div className="container-cartSummary">
                            {cart.map((item) => (
                                <CartSummary key={item.id} dataProduct={item} />
                            ))}

                            <TotalCart />

                            <div className="d-grid gap-2 py-4 ms-4">
                                <Link to="/checkout" className="btn btn-success" >Proceed to checkout</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </>);
    }


    return (
        <header >
            <nav className="navbar fixed-top color-blue">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white ms-5" to="/">E-commerce Page</Link>

                    <button className="btn btn-warning me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <div className="d-flex flex-row align-middle">

                            <img src={cartLogo} alt="cartLogo" className="button-cart-icon me-2" />
                            <div className="button-circle">
                                {cartCount}
                            </div>
                        </div>
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