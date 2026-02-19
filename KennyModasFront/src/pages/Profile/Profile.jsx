import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Buttom from "../../components/Buttom/Buttom";
import { User, Package, MapPin, LogOut } from 'lucide-react';
import "./Profile.css";

function Profile() {
    // Estado para controlar qual aba está aberta (dados ou pedidos)
    const [activeTab, setActiveTab] = useState('dados');

    // MOCK: Dados do Usuário
    const user = {
        nome: "Maria Eduarda",
        email: "maria.eduarda@email.com",
        telefone: "(74) 99999-9999",
        cpf: "123.456.789-00"
    };

    // MOCK: Lista de Pedidos
    const pedidos = [
        { id: "#1029", data: "15 Fev 2026", status: "Em Trânsito", total: "R$ 359,80" },
        { id: "#0982", data: "10 Jan 2026", status: "Entregue", total: "R$ 129,90" },
    ];

    // Função para renderizar o conteúdo da aba selecionada
    const renderContent = () => {
        if (activeTab === 'dados') {
            return (
                <div className="profile-section fade-in">
                    <h2 className="section-title-profile">Meus Dados</h2>
                    <p className="section-subtitle">Gerencie suas informações pessoais.</p>
                    
                    <form className="profile-form">
                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input type="text" defaultValue={user.nome} />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" defaultValue={user.email} disabled className="disabled-input"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>CPF</label>
                                <input type="text" defaultValue={user.cpf} disabled className="disabled-input"/>
                            </div>
                            <div className="form-group">
                                <label>Telefone</label>
                                <input type="text" defaultValue={user.telefone} />
                            </div>
                        </div>
                        <div className="profile-action">
                            <Buttom name="Salvar Alterações" variant="dark" />
                        </div>
                    </form>
                </div>
            );
        }

        if (activeTab === 'pedidos') {
            return (
                <div className="profile-section fade-in">
                    <h2 className="section-title-profile">Meus Pedidos</h2>
                    <p className="section-subtitle">Acompanhe o status das suas compras.</p>
                    
                    <div className="orders-list">
                        {pedidos.map((pedido, index) => (
                            <div key={index} className="order-card">
                                <div className="order-header">
                                    <span className="order-id">Pedido {pedido.id}</span>
                                    <span className={`order-status ${pedido.status === 'Entregue' ? 'success' : 'pending'}`}>
                                        {pedido.status}
                                    </span>
                                </div>
                                <div className="order-body">
                                    <p><strong>Data:</strong> {pedido.data}</p>
                                    <p><strong>Total:</strong> {pedido.total}</p>
                                </div>
                                <button className="view-details-btn">Ver Detalhes</button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="profile-page">
            <Navbar />
            
            <div className="profile-container">
                {/* MENU LATERAL DO PERFIL */}
                <aside className="profile-sidebar">
                    <div className="profile-user-info">
                        <div className="avatar-circle">
                            {user.nome.charAt(0)}
                        </div>
                        <h3>{user.nome}</h3>
                        <p>{user.email}</p>
                    </div>

                    <nav className="profile-nav">
                        <button 
                            className={`profile-nav-btn ${activeTab === 'dados' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dados')}
                        >
                            <User size={20} /> Meus Dados
                        </button>
                        <button 
                            className={`profile-nav-btn ${activeTab === 'pedidos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('pedidos')}
                        >
                            <Package size={20} /> Meus Pedidos
                        </button>
                        <button className="profile-nav-btn">
                            <MapPin size={20} /> Endereços
                        </button>
                        <button className="profile-nav-btn logout">
                            <LogOut size={20} /> Sair
                        </button>
                    </nav>
                </aside>

                {/* CONTEÚDO PRINCIPAL */}
                <main className="profile-content">
                    {renderContent()}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default Profile;