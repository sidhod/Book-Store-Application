import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/dashboard';
import LoginSiginPage from '../Pages/Login&signin/loginsigin';
import MyCart from './mycart';
import OrderSuccess from './order';
import WishList from './wishList';


function Router1() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginSiginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/mycard" element={<MyCart />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/order" element={<OrderSuccess />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Router1;