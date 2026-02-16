import "./ProductCard.css"

function ProductCard({ img, produto }){ 
    return(
        <div className="productCard">
            <img src={img} alt={produto} />
            <div className="text-overlay">
                <h1>{produto}</h1>
                <p>Ver coleção →</p>
            </div>
        </div>
    )
}

export default ProductCard;