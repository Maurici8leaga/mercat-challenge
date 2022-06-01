import React from 'react';
import Header from './Header';
import Cart from './Cart';

const ListItem = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="text-center">List Item</h2>
                <div className="row">
                    <div className="col-3">Item</div>
                    <div className="col-3">Item</div>
                    <div className="col-3">Item</div>

                    <div className="col-3">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem;