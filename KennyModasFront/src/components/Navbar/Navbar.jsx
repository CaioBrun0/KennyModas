import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../Context/CartContext'; // 1. Importando o contexto do carrinho
import CartSidebar from '../CartSidebar/CartSidebar'; // 2. Importando o componente do carrinho
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 3. Pegando as funções e dados do carrinho
  const { toggleCart, totalItemsCount } = useCart(); 

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          {/* LADO ESQUERDO: Botão que abre o menu */}
          <div className="nav-left">
             <button className="icon-btn" onClick={() => setIsOpen(true)}>
               <Menu size={28} />
             </button>
          </div>

          {/* CENTRO: Logo Absoluto */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            Kenny Modas
          </Link>

          {/* LADO DIREITO: Ícones de Ação */}
          <ul className="nav-right">
            <li className="nav-item">
              <Link to="/favoritos" className="nav-icon-link">
                <Heart size={24} />
              </Link>
            </li>
            
            {/* ÍCONE DO CARRINHO ATUALIZADO */}
            <li className="nav-item">
              <button 
                className="icon-btn nav-icon-link" 
                onClick={toggleCart} 
                style={{ position: 'relative', background: 'transparent', border: 'none' }}
              >
                <ShoppingCart size={24} />
                
                {/* BOLINHA VERMELHA (Só aparece se tiver algo no carrinho) */}
                {totalItemsCount > 0 && (
                  <span className="cart-badge">{totalItemsCount}</span>
                )}
              </button>
            </li>

            <li className="nav-item desktop-only">
              <Link to="/perfil" className="nav-icon-link">
                <User size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* A GAVETA LATERAL (SIDEBAR DE NAVEGAÇÃO) */}
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button className="icon-btn close-btn" onClick={closeMenu}>
            <X size={28} />
          </button>
        </div>

        <ul className="sidebar-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/categoria/tudo" onClick={closeMenu}>Produtos</Link></li>
          <li><Link to="/lancamentos" onClick={closeMenu}>Lançamentos</Link></li>
          <li><Link to="/sobre" onClick={closeMenu}>Sobre Nós</Link></li>
          <li className="mobile-only"><Link to="/perfil" onClick={closeMenu}>Minha Conta</Link></li>
        </ul>
      </div>

      {/* RENDERIZANDO A GAVETA DO CARRINHO */}
      <CartSidebar />
    </>
  );
}

export default Navbar;