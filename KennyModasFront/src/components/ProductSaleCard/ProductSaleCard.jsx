import "./ProductSaleCard.css";

function ProductSaleCard({ img, categoria, estacao, preco, desconto }) { 
    return(
        <div className="productCard">
            <img src={img} alt={`${categoria} - ${estacao}`} />
            <div className="text-overlay">
                {/* LÓGICA DE PREÇO: */}
                {desconto ? (
                    <p className="price-promo">
                        <span className="old-price">De R$ {preco}</span>
                        <span className="new-price"> <br/> por R$ {desconto}</span>
                    </p>
                ) : (
                    <p className="price-regular">R$ {preco}</p>
                )}
                
            </div>
        </div>
    )
}

export default ProductSaleCard;