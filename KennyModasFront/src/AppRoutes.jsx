// src/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota da Página Inicial */}
                <Route path="/" element={<Landing />} />
                <Route path="/categoria/:nome" element={<Category />} />
                <Route path="/produto/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;