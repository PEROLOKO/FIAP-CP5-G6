import { Link } from "react-router-dom";
import styled from "styled-components";

import lanche1 from "./assets/img/lanche1.jpg";
import lanche2 from "./assets/img/lanche2.jpg";
import lanche3 from "./assets/img/lanche3.jpg";
import lanche4 from "./assets/img/lanche4.jpg";
import lanche5 from "./assets/img/lanche5.jpg";
import lanche6 from "./assets/img/lanche6.jpg";
import lanche7 from "./assets/img/lanche7.jpg";
import lanche8 from "./assets/img/lanche8.jpg";
import lanche9 from "./assets/img/lanche9.jpg";
import lanche10 from "./assets/img/lanche10.jpg";
import lanche11 from "./assets/img/lanche11.jpg";
import lanche12 from "./assets/img/lanche12.jpg";

const DivProduto = styled.div`
    .produto{ /* .classe */
        width:250px;
        height:300px;
        background-color:#FFC72C;
        margin:0px 0px 20px 20px;
        padding: 10px;
        float:left;
    }
`

const Produto = props => {
    var lanche = parseInt(props.lanche);
    var imagem;
    if (lanche === 1) {
        imagem = lanche1;
    } else if (lanche === 2) {
        imagem = lanche2;
    } else if (lanche === 3) {
        imagem = lanche3;
    } else if (lanche === 4) {
        imagem = lanche4;
    } else if (lanche === 5) {
        imagem = lanche5;
    } else if (lanche === 6) {
        imagem = lanche6;
    } else if (lanche === 7) {
        imagem = lanche7;
    } else if (lanche === 8) {
        imagem = lanche8;
    } else if (lanche === 9) {
        imagem = lanche9;
    } else if (lanche === 10) {
        imagem = lanche10;
    } else if (lanche === 11) {
        imagem = lanche11;
    } else if (lanche === 12) {
        imagem = lanche12;
    }

    return (
        <DivProduto>
            <div className="produto">
                <img src={imagem} width="100%" height="230px"/>
            </div>
        </DivProduto>
    )
}

export default Produto;