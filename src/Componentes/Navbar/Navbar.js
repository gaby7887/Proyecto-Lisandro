import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

import logo from '../../Imagenes/logo.png'

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/"><img className='logoLisandro' src={logo} alt='logo' /></Link>

            <div className="link">
                <ul className="link">
                    <li><Link to='/' className="inicioNavbar">Inicio</Link></li>
                    <li><Link to='AcercaDeMi' className="acercaDeMiNavbar">Acerca de mi</Link></li>
                    <li><Link to='Servicios' className="serviciosNavbar">Servicios</Link></li>
                    <li><Link to='Contacto' className="contactoNavbar">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar