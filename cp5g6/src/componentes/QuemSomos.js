import { Link } from "react-router-dom";
import styled from "styled-components";

import banner from "./assets/img/quemsomos.jpg";
import Footer from "./Footer";

import Produto from "./Produto";

const DivCardapio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color:#FFFFFF;
    .texto {
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 90%;
    }
`

function Cardapio () {
    return (
        <DivCardapio>
            <img src={banner} width="100%" />
            <div className="texto">
                <h1>Quem Somos</h1>
                <p>A Arcos Dorados é a maior franquia independente direitos exclusivos de possuir, operar e conceder o McDonald’s do mundo e a principal rede de alimentação rápida em toda América Latina e Caribe. A companhia tem as franquias de restaurantes McDonald's em 20 países e territórios, incluindo Argentina, Aruba, Brasil, Chile, Colômbia, Costa Rica, Curaçao, Equador, Guiana Francesa, Guadalupe, Martinica, México, Panamá, Peru, Porto Rico, St. Croix, St. Thomas, Trinidad & Tobago, Uruguai e Venezuela.

Desde sua fundação, em 2007, a companhia preza por compromissos que norteiam sua operação, como qualidade, transparência e segurança do alimento, geração de empregos formais para jovens, apoio às comunidades onde está presente, cadeia de suprimentos sustentável e impacto ambiental, diversidade e inclusão e experiências inovadoras para toda a família.

Atualmente, a rede conta com mais de 2.200 restaurantes em toda América Latina, entre unidades próprias e subfranqueadas, além de mais de 240 McCafés e cerca de 3.300 desert centers. Para isso, contamos com mais de 100 mil funcionários em toda região. No Brasil, são cerca de 1.020 restaurantes, mais de 75 McCafés e 2.010 desert centers, empregando mais de 50 mil pessoas.</p>
            </div>
            <Footer/>
        </DivCardapio>
    )
}

export default Cardapio;