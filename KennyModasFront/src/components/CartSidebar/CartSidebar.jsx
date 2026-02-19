import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import "./CartSidebar.css";

function CartSidebar() {
    const { 
        isCartOpen, toggleCart, cartItems, removeFromCart, 
        updateQuantity, toggleSelection, totalCartPrice 
    } = useCart();
    
    const navigate = useNavigate();

    return (
        <>
            {/* Overlay escuro que fica atrás do carrinho */}
            <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}></div>

            {/* A barra lateral em si */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Sua Sacola</h2>
                    <button className="close-cart" onClick={toggleCart}>✕</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Sua sacola está vazia.</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className={`cart-item ${!item.selected ? 'unselected' : ''}`}>
                                {/* Checkbox */}
                                <input 
                                    type="checkbox" 
                                    className="item-checkbox"
                                    checked={item.selected}
                                    onChange={() => toggleSelection(item.id, item.tamanho, item.cor)}
                                />
                                
                                {/* Imagem */}
                                <img src={item.img} alt={item.nome || item.categoria} />
                                
                                {/* Detalhes */}
                                <div className="item-details">
                                    <p className="item-name">{item.nome || item.categoria}</p>
                                    <p className="item-props">Tam: {item.tamanho} | Cor: <span style={{backgroundColor: item.cor, width:'10px', height:'10px', display:'inline-block', borderRadius:'50%'}}></span></p>
                                    <p className="item-price">R$ {item.price}</p>
                                    
                                    {/* Controles */}
                                    <div className="item-controls">
                                        <div className="quantity-control">
                                            <button onClick={() => updateQuantity(item.id, item.tamanho, item.cor, -1)}>-</button>
                                            <span>{item.quantidade}</span>
                                            <button onClick={() => updateQuantity(item.id, item.tamanho, item.cor, 1)}>+</button>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id, item.tamanho, item.cor)}>
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Rodapé do Carrinho (Cálculos e Botão) */}
                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="shipping-info">
                            <p>🚛 <strong>Frete Grátis</strong> em Miguel Calmon - BA</p>
                            <p className="shipping-sub">Outras regiões calculadas no checkout</p>
                        </div>
                        
                        <div className="cart-total">
                            <span>Total Selecionado</span>
                            {/* Formata o número de volta para R$ 00,00 */}
                            <span>{totalCartPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        
                        <button 
                            className="checkout-btn" 
                            onClick={() => {
                                toggleCart();
                                navigate('/pagamento'); // Rota futura do pagamento
                            }}
                            disabled={totalCartPrice === 0} // Desabilita se nada estiver marcado
                        >
                            Concluir Compra
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartSidebar;