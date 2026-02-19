import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Buttom from "../../components/Buttom/Buttom"; // Reutilizando seu botão
import Footer from "../../components/Footer/Footer"; // Se tiver criado
import { useCart } from '../../Context/CartContext';
import "./ProductDetails.css";

function ProductDetails() {
    const { state } = useLocation(); // Recupera os dados enviados pelo card
    const navigate = useNavigate();
    const product = state?.product;

    const { addToCart } = useCart(); // 2. PEGA A FUNÇÃO

    // Estados para seleção
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
    const [corSelecionada, setCorSelecionada] = useState(null);
    const [erro, setErro] = useState(""); // Pra avisar o usuário se esquecer de marcar

    // 3. FUNÇÃO DO CLIQUE
    const handleAddToCart = () => {
        if (!tamanhoSelecionado || !corSelecionada) {
            setErro("Por favor, selecione um tamanho e uma cor.");
            return;
        }
        setErro("");
        // Envia o produto, o tamanho e a cor
        addToCart(product, tamanhoSelecionado, corSelecionada);
    };

    // Se tentar acessar a rota direto sem clicar no card, volta pra home
    if (!product) {
        return (
            <div className="error-container">
                <h2>Produto não encontrado</h2>
                <button onClick={() => navigate('/')}>Voltar para Home</button>
            </div>
        );
    }

    return (
        <div className="details-page">
            <Navbar />

            <div className="details-container">
                {/* LADO ESQUERDO: FOTO */}
                <div className="details-image">
                    <img src={product.img} alt={product.nome} />
                </div>

                {/* LADO DIREITO: INFORMAÇÕES */}
                <div className="details-info">
                    <span className="breadcrumb-detail">
                        {product.estacao} / {product.categoria}
                    </span>

                    <h1 className="product-title">{product.nome || product.categoria}</h1>
                    <h2 className="product-price">R$ {product.price}</h2>

                    <p className="product-description">
                        {product.descricao || "Peça exclusiva da coleção Kenny Modas, unindo conforto e elegância."}
                    </p>

                    {/* SELEÇÃO DE TAMANHOS */}
                    <div className="selector-group">
                        <span className="selector-label">Tamanho: {tamanhoSelecionado}</span>
                        <div className="sizes-grid">
                            {product.tamanhos?.map((tam) => (
                                <button
                                    key={tam}
                                    className={`size-btn ${tamanhoSelecionado === tam ? 'selected' : ''}`}
                                    onClick={() => setTamanhoSelecionado(tam)}
                                >
                                    {tam}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SELEÇÃO DE CORES */}
                    <div className="selector-group">
                        <span className="selector-label">Cor</span>
                        <div className="colors-grid">
                            {product.cores?.map((cor, index) => (
                                <button
                                    key={index}
                                    className={`color-btn ${corSelecionada === cor ? 'selected' : ''}`}
                                    style={{ backgroundColor: cor }}
                                    onClick={() => setCorSelecionada(cor)}
                                    aria-label={`Selecionar cor ${index}`}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {erro && <p style={{color: 'red', fontSize: '0.9rem', marginTop: '10px'}}>{erro}</p>}

                    <div className="action-area" onClick={handleAddToCart}>
                        <Buttom name="Adicionar à Sacola" variant="dark" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProductDetails;