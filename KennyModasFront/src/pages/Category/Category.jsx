import React from 'react';
import { useParams } from 'react-router-dom';
import "./Category.css";
import Navbar from "../../components/Navbar/Navbar";
import ProductSaleCard from "../../components/ProductSaleCard/ProductSaleCard.jsx";

// Importe suas imagens
import blusa1 from "../../assets/blusa_feminina/blusa1.jpg";
import blusa2 from "../../assets/blusa_feminina/blusa2.jpg";
import blusa3 from "../../assets/blusa_feminina/blusa3.jpg";
import blusa4 from "../../assets/blusa_feminina/blusa4.jpg";
import blusa5 from "../../assets/blusa_feminina/blusa5.jpg";
import blusa6 from "../../assets/blusa_feminina/blusa6.jpg";
import Footer from '../../components/Footer/Footer.jsx';
// ... outros imports

function Category() {
    const { nome } = useParams(); 
    
    const titulo = nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "Coleção";
    
    // 1. BANCO DE DADOS SIMULADO
    const allProducts = [
        // --- BLUSAS ---
        { id: 1, img: blusa1, price: "129,90", categoria: "Blusas", estacao: "Verão" },
        { id: 2, img: blusa2, price: "199,90", categoria: "Blusas", estacao: "Primavera" },
        { id: 3, img: blusa3, price: "89,90",  categoria: "Blusas", estacao: "Outono" },
        { id: 4, img: blusa4, price: "149,90", categoria: "Blusas", estacao: "Inverno" },   
        { id: 5, img: blusa5, price: "179,90", categoria: "Blusas", estacao: "Festa" },
        { id: 6, img: blusa6, price: "99,90",  categoria: "Blusas", estacao: "Casual" },
        // --- CALÇAS ---
        { id: 4, img: blusa1, price: "299,90", categoria: "Calças", estacao: "Inverno" },
        { id: 5, img: blusa1, price: "159,90", categoria: "Calças", estacao: "Verão" },
        // --- VESTIDOS ---
        { id: 6, img: blusa1, price: "459,90", categoria: "Vestidos", estacao: "Festa" },
    ];

    // 2. FILTRO
    const filteredProducts = allProducts.filter((produto) => {
        return produto.categoria.toLowerCase() === nome?.toLowerCase();
    });

    return (
        <div className="category-page">
            <Navbar />

            {/* HEADER EDITORIAL */}
            <header className="category-header">
                <div className="header-content">
                    <span className="breadcrumb">Home / {titulo}</span>
                    <h1 className="category-title">{titulo}</h1>
                    <p className="category-description">
                        Peças selecionadas para trazer elegância e conforto ao seu dia a dia.
                    </p>
                </div>
            </header>

            <div className="top-bar">
                <p>FRETE GRÁTIS EM MIGUEL CALMON - BA</p>
            </div>

            {/* BARRA DE FILTROS MINIMALISTA */}
            <div className="filter-container">
                <div className="filter-bar">
                    <span className="product-count">{filteredProducts.length} Produtos</span>
                    
                    <div className="sort-options">
                        <span>Ordenar:</span>
                        <select className="minimal-select">
                            <option>Mais Recentes</option>
                            <option>Menor Preço</option>
                            <option>Maior Preço</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* GRID DE PRODUTOS */}
            <div className="category-container">
                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <ProductSaleCard 
                                key={item.id} 
                                img={item.img} 
                                categoria={titulo} 
                                estacao={item.estacao} 
                                preco={`${item.price}`}
                            />
                        ))
                    ) : (
                        <div className="no-products">
                            <h3>Nenhum produto encontrado.</h3>
                            <p>Tente navegar por outra categoria.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Category;