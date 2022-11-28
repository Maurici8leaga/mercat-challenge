import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteItem, adjustQty } from '../actions/indexAction';
import trashLogo from '../extras/trash-can.svg';

const CartSummary = ({ dataProduct, deleteItem, adjustQty }) => {

    useEffect(() => {
        deleteItem()
    }, [deleteItem, adjustQty]);

    const { name, price, qty, id } = dataProduct;

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
                        <div className="row d-flex mb-3">

                            <div className="col-7">
                                <div className="container-texto">
                                    <>{name} <div className="text-warning">${price}</div></>
                                </div>
                            </div>

                            <div className="col-4 ">
                                <div className="input-group ">
                                    <label className="form-label me-3">Qty</label>
                                    <input type="number" className="form-control" min="1" name="qty" value={qty} onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="col-1">
                                <button className="btn btn-danger btn-sm" onClick={e => deleteItem(id)}>
                                    <img src={trashLogo} alt="trash-can" className="button-icon-container" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default connect(null, { deleteItem, adjustQty })(CartSummary);