import React from 'react';

const CardSummary = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className=" mb-3">

                        <div className="row d-flex align-content-center mb-3">

                            <div className="col-8">Tatsuhisa “Luke” Kamijō - price $$$ </div>

                            <div className="col-3 ">
                                <div className="input-group ">
                                    <label className="form-label me-3">Qty</label>
                                    <input type="number" className="form-control" min="1" />
                                </div>
                            </div>

                            <div className="col-1">
                                <button className="btn btn-danger">delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="">
                TOTAL : (N ITEMS) ----   $$$$$$$$$$$$
            </div>
        </div>
    )
}

export default CardSummary;