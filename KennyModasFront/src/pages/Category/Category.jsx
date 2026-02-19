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

    const isTudo = nome === "tudo";
    
    const titulo = isTudo 
        ? "Tudo" 
        : (nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "Coleção");
    
    // 1. BANCO DE DADOS SIMULADO
    const allProducts = [
        { 
            id: 1, 
            img: blusa1, 
            price: "129,90", 
            categoria: "Blusas", 
            estacao: "Verão",
            // NOVOS DADOS:
            nome: "Blusa de Seda Off-White",
            descricao: "Uma peça delicada e versátil, perfeita para compor looks de trabalho ou casuais com um toque de sofisticação.",
            tamanhos: ["P", "M", "G", "GG"],
            cores: ["#fdfbf7", "#2c2c2c", "#d4a5a5"] // Hex codes para as cores (Creme, Preto, Rosa)
        },
        { 
            id: 2, 
            img: blusa2, 
            price: "199,90", 
            categoria: "Blusas", 
            estacao: "Primavera",
            nome: "Blusa de Linho Bege",
            descricao: "Uma peça leve e confortável, ideal para dias ensolarados. Com detalhes sutis que elevam o look.",
            tamanhos: ["P", "M", "G"],
            cores: ["#e0c8a2", "#f5f5f5"] // Hex codes para as cores (Bege, Branco)
        },
        { 
            id: 3, 
            img: blusa3, 
            price: "89,90", 
            categoria: "Blusas", 
            estacao: "Outono",
            nome: "Blusa de Seda Rosa",
            descricao: "Uma peça elegante e sofisticada, ideal para compor looks de dia e noite com um toque de feminilidade.",
            tamanhos: ["P", "M", "G"],
            cores: ["#f5c0c0", "#f8f8f8"] // Hex codes para as cores (Rosa, Branco)
        },
        {
            id: 4,
            img: blusa4,
            price: "149,90",
            categoria: "Blusas",
            estacao: "Inverno",
            nome: "Blusa de Seda Azul",
            descricao: "Uma peça elegante e sofisticada, ideal para compor looks de dia e noite com um toque de feminilidade.",
            tamanhos: ["P", "M", "G"],
            cores: ["#a0c0e0", "#f8f8f8"] // Hex codes para as cores (Azul, Branco)
        },
        {
            id: 5,
            img: blusa5,
            price: "179,90",
            categoria: "Blusas",
            estacao: "Festa",
            nome: "Blusa de Seda Rosa Escuro",
            descricao: "Uma peça elegante e sofisticada, ideal para compor looks de dia e noite com um toque de feminilidade.",
            tamanhos: ["P", "M", "G"],
            cores: ["#c08080", "#f8f8f8"] // Hex codes para as cores (Rosa Escuro, Branco)
        },
        {
            id: 6,
            img: blusa6,
            price: "99,90",
            categoria: "Blusas",
            estacao: "Casual",
            nome: "Blusa de Seda Branca",
            descricao: "Uma peça leve e confortável, ideal para dias ensolarados. Com detalhes sutis que elevam o look.",
            tamanhos: ["P", "M", "G"],
            cores: ["#ffffff", "#f5f5f5"] // Hex codes para as cores (Branco, Branco)
        },
    ];

    // 2. FILTRO
    const filteredProducts = isTudo 
        ? allProducts // <--- SE FOR "TUDO", RETORNA A LISTA INTEIRA
        : allProducts.filter((produto) => {
            // SE NÃO, FILTRA NORMALMENTE
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
                                dados={item}
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