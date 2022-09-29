import { Link } from "react-router-dom";
import styled from "styled-components";

import slide1 from "./assets/img/slide1.png"
import slide2 from "./assets/img/slide2.png"
import slide3 from "./assets/img/slide3.png"
import slide4 from "./assets/img/slide4.png"
import Footer from "./Footer";
import Produto from "./Produto";

const DivHome = styled.div`
    display: flex;
    flex-direction: column;
    .slider {
        overflow: hidden;
    }
    .slider figure {
        position: relative;
        width: 500%;
        margin: 0;
        left: 0;
        animation: 20s slider infinite;
    }
    .slider figure img {
        width: 20%;
        float: left;
    }

    @keyframes slider {
        0% {
            left: 0;
        }
        20% {
            left: 0;
        }
        25% {
            left: -100%;
        }
        45% {
            left: -100%;
        }
        50% {
            left: -200%;
        }
        70% {
            left: -200%;
        }
        75% {
            left: -300%;
        }
        95% {
            left: -300%;
        }
        100% {
            left: -400%;
        }
    }

    .container {
        margin: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 600px;
        color: #FFFFFF;
    }
    .botao {
        text-decoration: none;
        padding: 6px 12px;
        border: solid #FFFF00 2px;
        border-radius: 20px;
        color: #FFFF00;
    }
    .botao:hover {
        background-color: #FFFF00;
        color: #000;
    }
    .itens {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

`

function Home () {
    return (
        <DivHome>
            <div className="slider">
                <figure>
                    <img src={slide1}/>
                    <img src={slide2}/>
                    <img src={slide3}/>
                    <img src={slide4}/>
                    <img src={slide1}/>
                </figure>
            </div>
            <div className="container">
                <h1>Conheça nosso Cardápio!</h1>
                <Link className="botao" to="/cardapio">Eu quero!</Link>
                <h2>Novidades:</h2>
                <div className="itens">
                    <Produto lanche="5"/>
                    <Produto lanche="3"/>
                    <Produto lanche="9"/>
                    <Produto lanche="8"/>
                </div>
                <h2>Em Promoção:</h2>
                <div className="itens">
                    <Produto lanche="2"/>
                    <Produto lanche="6"/>
                    <Produto lanche="12"/>
                    <Produto lanche="1"/>
                </div>
                <Footer/>
            </div>
        </DivHome>
    )
}

export default Home;