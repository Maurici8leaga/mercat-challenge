import React from 'react';

const ListItem = () => {
    return (
        <div>
            <div className="container">
                <h2 className="text-center">List Item</h2>
                <div className="row">
                    <div className="col-3">Item</div>
                    <div className="col-3">Item</div>
                    <div className="col-3">Item</div>

                    <div className="col-3">
                        <aside>
                            <h2>CART ITEMS</h2>
                            <div className="row">
                                <div className="col-12">ITEM</div>
                                <div className="col-12">ITEM</div>
                                <div className="col-12">ITEM</div>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem;