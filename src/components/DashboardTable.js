import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardTable.css';

export const DashboardTable = () => {
    return (
        <div className='form-container'>
            <div className='form-div'>
                <form>
                    <div className="form- d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault01">Product Name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Enter Product Name" required />
                        </div>
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefaultUsername">Product Price</label>
                            <div className="input-group">
                                <input type="number" className="form-control" id="validationDefaultUsername" placeholder="Enter Price" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form- d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault01">Inventary Counts</label>
                            <input type="password" className="form-control" id="validationDefault01" placeholder="Enter Stock" required />
                        </div>
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefaultUsername">Upload Image</label>
                            <div className="input-group">
                                <input type="file" accept='image/*' className="form-control" id="validationDefaultUsername" placeholder="Upload Image" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault01">Product Description</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Enter Product Description" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center"></div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Add Product</button>
                    </div>
                </form>
            </div >
        </div >
    )
}
