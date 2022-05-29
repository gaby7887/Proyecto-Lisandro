import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

import logo from '../../Imagenes/logo.png'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/"><img className='logoLisandro' src={logo} alt='logo' /></Link>
            <div className="link">
                <ul className="listadoNavbar">
                    <a href='#inicio' className="inicioNavbar">Inicio</a>
                    <a href="#acercaDeMi"className="acercaDeMiNavbar">Acerca de mi</a>
                    <a href="#servicios" className="serviciosNavbar">Servicios</a>
                    <a href="#contacto" className="contactoNavbar">Contacto</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar