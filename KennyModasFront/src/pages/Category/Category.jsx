import React from 'react';
import "./Category.css";
import Navbar from "../../components/Navbar/Navbar";
import ProductSaleCard from "../../components/ProductSaleCard/ProductSaleCard.jsx";

// Importe suas imagens aqui (ou use repetidas para teste)
import blusa1 from "../../assets/blusa_feminina/blusa1.jpg";
import blusa2 from "../../assets/blusa_feminina/blusa2.jpg";
import blusa3 from "../../assets/blusa_feminina/blusa3.jpg";
import blusa4 from "../../assets/blusa_feminina/blusa4.jpg";
import blusa6 from "../../assets/blusa_feminina/blusa5.jpg";
import blusa7 from "../../assets/blusa_feminina/blusa6.jpg";


function Category({ name }) {
    
    // Simulação de produtos desta categoria
    // (Na vida real, isso viria de um banco de dados)
    const products = [
        { id: 1, img: blusa1, price: "129,90" },
        { id: 2, img: blusa2, price: "199,90" },
        { id: 3, img: blusa3, price: "89,90" },
        { id: 4, img: blusa4, price: "149,90" },
        { id: 5, img: blusa6, price: "59,90" },
        { id: 6, img: blusa7, price: "219,90" },
    ];

    return (
        <div className="category-page">
            <Navbar />

            {/* 1. HEADER DA CATEGORIA (Estilo Editorial) */}
            <header className="category-header">
                <span className="breadcrumb">Home / {name}</span>
                <h1 className="category-title">{name}</h1>
                <p className="category-subtitle">
                    Uma curadoria exclusiva de peças que unem elegância e conforto.
                </p>
            </header>

            {/* 2. BARRA DE FILTROS (Visual) */}
            <div className="filter-bar">
                <span>{products.length} Produtos</span>
                <div className="sort-options">
                    <span>Ordenar por: </span>
                    <select>
                        <option>Mais Recentes</option>
                        <option>Menor Preço</option>
                        <option>Maior Preço</option>
                    </select>
                </div>
            </div>

            {/* 3. GRID DE PRODUTOS */}
            <div className="category-container">
                <div className="products-grid fade-in-up">
                    {products.map((item) => (
                        <ProductSaleCard 
                            key={item.id} 
                            img={item.img} 
                            categoria={item.categoria} 
                            estacao={item.estacao} 
                            preco={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;