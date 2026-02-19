import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importe o BrowserRouter
import Landing from "./pages/Landing/Landing";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Profile from "./pages/Profile/Profile";

function AppRoutes() {
    return (
        // Use BrowserRouter aqui (e não Router)
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/categoria/:nome" element={<Category />} />
                <Route path="/produto/:id" element={<ProductDetails />} />
                <Route path="/perfil" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;