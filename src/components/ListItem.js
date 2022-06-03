import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/indexAction';
import CardProduct from './CardProduct';

const ListItem = ({ getItems, item }) => {
    
    useEffect(() => {
    
        getItems();
    }, [getItems]);

    return !item || !item.length > 0 ? (<div>loading...</div>) : (
        <div>
            <div className="container extra-mt">
                <h2 className="text-center mt-4 mb-4">YU-GI-OH! Store</h2>
                <div className="text-center row row-cols-lg-3 row-cols-md-2 row-cols-sm-1  g-3 ms-5">
                    {item.map((item, index) => (
                        <div key={index}>
                            <div className="col mb-3 card-shadow">
                                <CardProduct product={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    item: state.item.product
})

export default connect(mapStateToProps, { getItems })(ListItem);