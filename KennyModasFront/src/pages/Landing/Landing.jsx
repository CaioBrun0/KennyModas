import React, { useRef } from 'react'; // 1. Importe o useRef
import "./Landing.css"
import Navbar from "../../components/Navbar/Navbar.jsx";
import Buttom from "../../components/Buttom/Buttom.jsx";
import kenniely from "../../assets/Kenniely.png"
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import blusa from "../../assets/blusa.png"
import calca from "../../assets/calça.png"
import cropped from "../../assets/cropped.png"
import saia from "../../assets/saia.png"
import vestido from "../../assets/vestido.png"
import short from "../../assets/short.png"

function Landing(){
    // 2. Criamos a referência para onde a tela deve deslizar
    const categoriasRef = useRef(null);

    // 3. Função que executa o scroll suave
    const handleScrollToCategories = () => {
        categoriasRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="landingMain">
            <Navbar/>

            <div className="modelKenny">
                <img src={kenniely} alt="Modelo Kenny Modas" />
                
                <div className="content">
                    <p>Descubra peças que definem seu estilo</p>
                    {/* 4. Envolvemos o botão em uma div clicável para garantir que funcione */}
                    <div onClick={handleScrollToCategories} style={{ cursor: 'pointer' }}>
                        <Buttom name="Explorar"></Buttom>
                    </div>
                </div>
            </div>

            {/* 5. Adicionamos a 'ref' aqui no Título. Assim o scroll para exatamente aqui */}
            <h1 
                ref={categoriasRef} 
                style={{"marginTop":"40px", fontFamily:"'Playfair Display', serif", marginBottom: "20px"}}
            >
                Categorias
            </h1>

            <div className="gridProducts">
                <ProductCard img={blusa} produto="Blusas"/>
                <ProductCard img={calca} produto="Calças"/>
                <ProductCard img={cropped} produto="Croppeds"/>
                <ProductCard img={saia} produto="Saias"/>
                <ProductCard img={vestido} produto="Vestidos"/>
                <ProductCard img={short} produto="Shorts"/>
            </div>
        </div>
    )
}

export default Landing;