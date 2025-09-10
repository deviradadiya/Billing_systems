import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Login from "./components/auth/Login";
import Header from "./components/Header";
import Dashboard from "./page/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import QuickBilling from "./page/Quick-Billing/QuickBilling";
import Register from "./components/auth/Register";
import TablesCars from "./page/Tabls-Cars/TablesCars";
import TotalOrder from "./page/Total-Order/TotalOrder";
import Sales from "./page/Sales/Sales";
import Staff from "./page/Staff/Staff";
import CreateOffers from "./page/Create-offers/CreateOffers";
import Menu from "./page/Menu/Menu";

function AppContent() {
    const location = useLocation();

    // ye paths par sidebar + header nahi dikhana
    const authRoutes = ["/login", "/register", "/forgot-password"];
    const isAuthPage = authRoutes.includes(location.pathname);

    return (
        <div className="main-section">
            {!isAuthPage && <Sidebar />}
            <div className="app-main-section">
                {!isAuthPage && (
                    <div className="header-content">
                        <Header />
                    </div>
                )}
                <div className="main-section-content">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        {/* future me register & forgot password pages bhi add kar lena */}
                        {/* <Route path="/register" element={<Register />} /> */}
                        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/quick-billing" element={<QuickBilling />} />
                        <Route path="/tables-cars" element={<TablesCars />} />
                        <Route path="/total-order" element={<TotalOrder />} />
                        <Route path="/sales" element={<Sales />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/create-offers" element={<CreateOffers />} />
                        <Route path="/menu" element={<Menu />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

function AppRoutes() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default AppRoutes;
