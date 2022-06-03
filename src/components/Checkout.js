import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';
import CartSummary from './CartSummary';
import TotalCart from './TotalCart';

const Checkout = ({ cart }) => {

  return (
    <div className="container-cart">
      <div className="extra-mt">

        <h2 className="text-center mb-3">Checkout</h2>

        {cart.map((item) => (
          <CartSummary key={item.id} dataProduct={item} />
        ))}

        <TotalCart />

        <div className="d-grid gap-2 py-4">
          <button className="btn btn-success" type="button">Pay out</button>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = state => ({
  cart: state.item.cart
})

export default connect(mapStateToProps)(Checkout);