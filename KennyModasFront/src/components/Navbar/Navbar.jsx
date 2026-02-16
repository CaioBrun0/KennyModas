import { useState } from 'react'; // 1. Importe o useState
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react'; // Adicionei o X para fechar
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 2. Estado do menu

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          {/* LADO ESQUERDO: Botão que abre o menu */}
          <div className="nav-left">
             <button className="icon-btn" onClick={() => setIsOpen(true)}>
               <Menu size={28} /> {/* Removi a cor fixa para o CSS controlar */}
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
            <li className="nav-item">
              <Link to="/carrinho" className="nav-icon-link">
                <ShoppingCart size={24} />
              </Link>
            </li>
            <li className="nav-item desktop-only"> {/* Ocultar perfil no mobile se faltar espaço */}
              <Link to="/perfil" className="nav-icon-link">
                <User size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 3. A GAVETA LATERAL (SIDEBAR) */}
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
          <li><Link to="/produtos" onClick={closeMenu}>Produtos</Link></li>
          <li><Link to="/lancamentos" onClick={closeMenu}>Lançamentos</Link></li>
          <li><Link to="/sobre" onClick={closeMenu}>Sobre Nós</Link></li>
          {/* Link extra para perfil no mobile */}
          <li className="mobile-only"><Link to="/perfil" onClick={closeMenu}>Minha Conta</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;