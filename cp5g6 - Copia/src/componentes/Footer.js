import { Link } from "react-router-dom";
import styled from "styled-components";

const DivFooter = styled.div`
		width:100%;
		background:#DA291C;
		margin:0px 0px 0px 0px;
		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;
        color: #FFFFFF;
`

export default function Footer() {
    return (
        <DivFooter>
            <footer>
				<h2>Gabriel Ferla Martin dos Anjos - RM:93344</h2>
                <h2>Henry Rodrigues Kinoshita - RM:93443</h2>
				<h2>Lucca Roswell Araujo Duarte - RM:94845</h2>
				<h2>Pedro Felipe Costa e Silva - RM:95653</h2>
			</footer>
        </DivFooter>
    );
}