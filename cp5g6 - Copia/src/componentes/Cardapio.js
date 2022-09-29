import { Link } from "react-router-dom";
import styled from "styled-components";

import banner from "./assets/img/banner.jpg";
import Footer from "./Footer";

import Produto from "./Produto";

const DivCardapio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color:#FFFFFF;
    .cardapio {
        padding-top: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

function Cardapio () {
    return (
        <DivCardapio>
            <img src={banner} width="100%" />
            <h1>Cardápio</h1>
            <div className="cardapio">
                <Produto lanche="1"/>
                <Produto lanche="2"/>
                <Produto lanche="3"/>
                <Produto lanche="4"/>
                <Produto lanche="5"/>
                <Produto lanche="6"/>
                <Produto lanche="7"/>
                <Produto lanche="8"/>
                <Produto lanche="9"/>
                <Produto lanche="10"/>
                <Produto lanche="11"/>
                <Produto lanche="12"/>
            </div>
            <Footer/>
        </DivCardapio>
    )
}

export default Cardapio;