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
                    <Link to='/' className="inicioNavbar">Inicio</Link>
                    <Link to='AcercaDeMi' className="acercaDeMiNavbar">Acerca de mi</Link>
                    <Link to='Servicios' className="serviciosNavbar">Servicios</Link>
                    <Link to='Contacto' className="contactoNavbar">Contacto</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar