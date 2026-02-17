// src/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Category from "./pages/Category/Category";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota da Página Inicial */}
                <Route path="/" element={<Landing />} />
                {/* Rota Dinâmica para Categorias (ex: /categoria/blusas) */}
                <Route path="/categoria/:nome" element={<Category />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;