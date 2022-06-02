import React from 'react';
import '../css/index.css';
import CardSummary from './CardSummary';

const Cart = () => {
  return (
    <div className="container-cart">
      <div className="extra-mt">

        <h2 className="text-center mb-3">Cart Summary</h2>

          <CardSummary/>
          
          <div className="d-grid gap-2 py-4">
            <button className="btn btn-success" type="button">Pay out</button>
          </div>
      </div>
    </div>

  )
}

export default Cart;