import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { DashboardTable } from './DashboardTable';

export const Dashboard = () => {
    return (
        <div>
            <div className='dashboard-top'>
                <div>
                    <h3>Deatails</h3>
                </div>
                <div>
                    <a href="/add-product"><button>Add Product</button></a>
                </div>
            </div>
            <div className='dashboard-details'>
                <div className='dashboard-links'>
                    <ul>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/orders">Orders</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/add-product" element={<DashboardTable />}>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
}
