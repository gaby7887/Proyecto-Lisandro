import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import Burger from './Burguer';
import styled from 'styled-components';
import logo from '../../Imagenes/logo.png';


const Nav = styled.nav`
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        /* padding: 15px 0; */
        z-index: 25;
    }
`


const Navbar = () => {
    return(
        <Nav>
            <div className="logo">
                <Link to="/"><img className='logoLisandro' src={logo} alt='logo' /></Link>
            </div>
            <Burger />
        </Nav>    
    )
}

export default Navbar