import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/img/logo.png"
import Menu from "./Menu";

const DivHeader = styled.div`
    header {
		width:100%;
		height:200px;
		background:#DA291C;
		margin:0px 0px 0px 0px;
		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;
    }
    @media (max-width: 792px) {
        .menu {
            width: 100%;
            display: flex;
            justify-content: left;
            margin-bottom: 20px;
        }
    }
`

export default function Header() {
    return (
        <DivHeader>
            <header>
				<Link to="/"><img src={logo} width="100px"/></Link>
                <div className="menu">
                    <Menu/>
                </div>
			</header>
        </DivHeader>
    )
}