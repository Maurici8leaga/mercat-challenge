import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/indexAction';

const ListItem = ({getItems, item}) => {

    useEffect(() =>{
        getItems();
    }, [getItems]);

    console.log( item, 'esto es del API');


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

const mapStateToProps = state => ({
    item: state.item.product
})

export default connect(mapStateToProps, {getItems})(ListItem);