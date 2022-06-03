import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {deleteItem, adjustQty} from '../actions/indexAction';

const CartSummary = ({dataProduct, deleteItem, adjustQty}) => { 

    useEffect(() => {
        deleteItem()
    }, [deleteItem, adjustQty]);

    const {name, price, qty, id} = dataProduct;

    const [, setQty] = useState(qty);


    const onChangeHandler = (e) => {
        setQty(e.target.value);
        adjustQty(id, e.target.value);
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className=" mb-3">

                        <div className="row d-flex align-content-center mb-3">

                            <div className="col-7">{name} $ {price}</div>

                            <div className="col-4 ">
                                <div className="input-group ">
                                    <label className="form-label me-3">Qty</label>
                                    <input type="number" className="form-control" min="1" name="qty" value={qty} onChange={onChangeHandler}/>
                                </div>
                            </div>

                            <div className="col-1">
                                <button className="btn btn-danger" onClick={e => deleteItem(id)}>delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default connect(null, {deleteItem, adjustQty}) (CartSummary);