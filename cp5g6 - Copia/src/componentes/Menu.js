import { Link } from "react-router-dom";
import styled from "styled-components";

const DivMenu = styled.div`

    nav ul li a{
        text-decoration:none;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        display:block;
        color: #FFFFFF;
    }

    nav ul li a:hover{
        margin-bottom:5px;
        border-bottom:5px solid #FFFF00;
    }

    @media (max-width:792px) {
        .hamburger-menu{
            float: left;
        }
        #menu_toggle{
            opacity: 0;
        }
        #menu_toggle:checked + .menu_btn > span{
            transform:rotate(45deg);
        }
        #menu_toggle:checked + .menu_btn > span::before{
            top:0;
            transform:rotate(0);
        }
        #menu_toggle:checked + .menu_btn > span::after{
            top:0;
            transform:rotate(90deg);
        }
        #menu_toggle:checked ~ .menu_box{
            left:0 !important;
        }
        .menu_btn{
            position:relative;
            top:20px;
            left:16px;
            width:20px;
            height: 20px;
            font-size: 10px;
            cursor: pointer;
            z-index: 1;
        }
        .menu_btn > span, .menu_btn > span::before, .menu_btn > span::after{
            display: block;
            position: relative;
            width: 100%;
            height: 1px;
            background-color: #FFFFFF;
            transition-duration: .25;
        }
        .menu_btn > span::before{
            content: '';
            top:-8px;
        }
        .menu_btn > span::after{
            content: '';
            top:6px;
        }
        .menu_box{
            display: block;
            position: fixed;
            top:0;
            left:-100%;
            height: 100vh;
            width: 200px;
            margin:0;
            padding: 42px 0 0;
            list-style: none;
            background-color: #27251F;
            transition-duration: .25s;
        }
        li a {
            margin-left: 60px;
            width: auto;
            margin-bottom: 10px;
        }
    }
    @media (min-width: 792px) {
        #menu_toggle {
            display: none;
        }
        .menu-item {
            padding: 5px;
            margin: 10px;
        }
        .menu_box {
            display: flex;
            list-style: none;
        }
    }
`

export default function Menu() {
    return (
        <DivMenu>
            <nav className="hamburger-menu">
				<input type="checkbox" id="menu_toggle"/>
				<label className="menu_btn" for="menu_toggle"><span></span></label>
				<ul className="menu_box">
					<li><Link className="menu-item" to="/">Home</Link></li>
					<li><Link className="menu-item" to="/cardapio">Cardápio</Link></li>
					<li><Link className="menu-item" to="/quem_somos">Quem Somos</Link></li>
					<li><Link className="menu-item" to="#">Família</Link></li>
					<li><Link className="menu-item" to="#">Promoções</Link></li>
					<li><Link className="menu-item" to="#">Méqui Pra Você</Link></li>
					<li><Link className="menu-item" to="#">Mc Dia Feliz</Link></li>
					<li><Link className="menu-item" to="#">Baixe o App</Link></li>
				</ul>
			</nav>
        </DivMenu>
    )

}