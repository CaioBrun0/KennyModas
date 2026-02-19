// eslint-disable-next-line react-refresh/only-export-components
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    // Função para adicionar ao carrinho
    const addToCart = (product, tamanho, cor) => {
        setCartItems((prevItems) => {
            // Verifica se o item com a mesma cor e tamanho já existe
            const existingItem = prevItems.find(
                (item) => item.id === product.id && item.tamanho === tamanho && item.cor === cor
            );

            if (existingItem) {
                // Se já existe, só aumenta a quantidade
                return prevItems.map((item) =>
                    item.id === product.id && item.tamanho === tamanho && item.cor === cor
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }
            // Se for novo, adiciona com quantidade 1 e marcado (selected: true)
            return [...prevItems, { ...product, tamanho, cor, quantidade: 1, selected: true }];
        });
        setIsCartOpen(true); // Abre o carrinho automaticamente ao adicionar
    };

    // Função para remover item (Lixeira)
    const removeFromCart = (id, tamanho, cor) => {
        setCartItems(cartItems.filter(item => !(item.id === id && item.tamanho === tamanho && item.cor === cor)));
    };

    // Função para mudar quantidade (+ e -)
    const updateQuantity = (id, tamanho, cor, delta) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id && item.tamanho === tamanho && item.cor === cor) {
                const newQuantity = item.quantidade + delta;
                return { ...item, quantidade: newQuantity > 0 ? newQuantity : 1 }; // Não deixa ficar menor que 1
            }
            return item;
        }));
    };

    // Função para marcar/desmarcar o checkbox
    const toggleSelection = (id, tamanho, cor) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id && item.tamanho === tamanho && item.cor === cor) {
                return { ...item, selected: !item.selected };
            }
            return item;
        }));
    };

    // Converte o preço de string "129,90" para número 129.90 para o cálculo
    const parsePrice = (priceString) => {
        if(!priceString) return 0;
        return parseFloat(priceString.toString().replace('R$', '').replace('.', '').replace(',', '.').trim());
    };

    // Calcula o total apenas dos itens marcados
    const totalCartPrice = cartItems
        .filter(item => item.selected)
        .reduce((total, item) => total + (parsePrice(item.price) * item.quantidade), 0);

    // Conta quantas peças existem no total (para a bolinha vermelha na Navbar)
    const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantidade, 0);

    return (
        <CartContext.Provider value={{
            isCartOpen, toggleCart, setIsCartOpen,
            cartItems, addToCart, removeFromCart, updateQuantity, toggleSelection,
            totalCartPrice, totalItemsCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para facilitar o uso
export const useCart = () => useContext(CartContext);
