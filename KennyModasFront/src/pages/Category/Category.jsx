import React from 'react';
import { useParams } from 'react-router-dom';
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


function Category() {
    const {nome} = useParams(); 
    const titulo = nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "Coleção";
    
    // Simulação de produtos desta categoria
    // (Na vida real, isso viria de um banco de dados)
    const products = [
        { id: 1, img: blusa1, price: "129,90", categoria: "Blusas"},
        { id: 2, img: blusa2, price: "199,90", categoria: "Blusas"},
        { id: 3, img: blusa3, price: "89,90", categoria: "Blusas"},
        { id: 4, img: blusa4, price: "149,90", categoria: "Blusas"},
        { id: 5, img: blusa6, price: "59,90", categoria: "Blusas"},
        { id: 6, img: blusa7, price: "219,90", categoria: "Blusas"},
    ];

    const filteredProducts = products.filter((produto) => {
        // Comparamos tudo em minúsculo para evitar erros (Blusas == blusas)
        return produto.categoria.toLowerCase() === nome.toLowerCase();
    });

    return (
        <div className="category-page">
            <Navbar />

            <header className="category-header">
                <span className="breadcrumb">Home / {titulo}</span>
                <h1 className="category-title">{titulo}</h1>
                <p className="category-subtitle">
                    Uma curadoria exclusiva de peças que unem elegância e conforto.
                </p>
            </header>

            <div className="filter-bar">
                {/* Agora mostramos a quantidade da lista filtrada */}
                <span>{filteredProducts.length} Produtos</span>
                <div className="sort-options">
                    <span>Ordenar por: </span>
                    <select>
                        <option>Mais Recentes</option>
                        <option>Menor Preço</option>
                        <option>Maior Preço</option>
                    </select>
                </div>
            </div>

            <div className="category-container">
                <div className="products-grid fade-in-up">
                    {/* 3. RENDERIZAÇÃO: Mapeamos a lista FILTRADA, não a completa */}
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <ProductSaleCard 
                                key={item.id} 
                                img={item.img} 
                                categoria={titulo} // Usamos o título formatado ou item.categoria
                                estacao={item.estacao} 
                                preco={`R$ ${item.price}`}
                            />
                        ))
                    ) : (
                        // Caso não ache nenhum produto nessa categoria
                        <div style={{fontSize: "28px", width: "100%", textAlign: "center", padding: "50px", color: "#666" }}>
                            <h3>Nenhum produto encontrado nesta categoria.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Category;