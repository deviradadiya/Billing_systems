import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./components/auth/Login";
import Header from "./components/Header";
import Dashboard from "./page/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import Shopkeeper from "./page/Shopkeepers/Shopkeeper";
import Subscription from "./page/Subscription/Subscription";
import Support from "./page/Support/Support";

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

            <Route path="/" element={<Dashboard />} />
            <Route path="/shopkeeper" element={<Shopkeeper />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/support" element={<Support />} />
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
