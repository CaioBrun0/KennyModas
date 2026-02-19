import { Link } from 'react-router-dom';
import "./ProductSaleCard.css";

// Agora recebemos o objeto 'dados' completo
function ProductSaleCard({ dados }) {
    return (
        <div className="productCard">
            {/* O Link envolve a imagem para torná-la clicável */}
            {/* Passamos o objeto 'dados' inteiro via 'state' para a próxima tela */}
            <Link to={`/produto/${dados.id}`} state={{ product: dados }}>
                <img src={dados.img} alt={dados.categoria} />
            </Link>

            <div className="text-overlay">
                {/* <h1>{dados.nome || dados.categoria}</h1> */}
                <p>R$ {dados.price}</p>
            </div>
        </div>
    )
}

export default ProductSaleCard;