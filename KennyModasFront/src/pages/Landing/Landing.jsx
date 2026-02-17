import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
    const categoriasRef = useRef(null);

    const handleScrollToCategories = () => {
        categoriasRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="landingMain">
            
            <Navbar/>

            <div className="modelKenny">
                <img src={kenniely} alt="Modelo Kenny Modas" />
                
                {/* O gradiente escuro agora é feito via CSS no ::after */}
                
                <div className="content">
                    <p>Descubra peças que definem seu estilo</p>
                    <div onClick={handleScrollToCategories} style={{ cursor: 'pointer' }}>
                        <Buttom name="Explorar"></Buttom>
                    </div>
                </div>
            </div>

            {/* TÍTULO EDITORIAL (NOVIDADE) */}
              <div className="top-bar" >
                <p>FRETE GRÁTIS EM MIGUEL CALMON - BA</p>
            </div>

            <h1 
                ref={categoriasRef} 
                className="section-title"
            >
                Coleções
            </h1>

            <div className="gridProducts">
                <Link to="/categoria/blusas">
                    <ProductCard img={blusa} produto="Blusas"/>
                </Link>
                <Link to="/categoria/calcas">
                    <ProductCard img={calca} produto="Calças"/>
                </Link>
                <Link to="/categoria/croppeds">
                    <ProductCard img={cropped} produto="Croppeds"/>
                </Link>
                <Link to="/categoria/saias">
                    <ProductCard img={saia} produto="Saias"/>
                </Link>
                <Link to="/categoria/vestidos">
                    <ProductCard img={vestido} produto="Vestidos"/>
                </Link>
                <Link to="/categoria/shorts">
                    <ProductCard img={short} produto="Shorts"/>
                </Link>
            </div>
        </div>
    )
}

export default Landing;