import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

import logo from '../../Imagenes/logo.png'

const Navbar = () => {
    return(
        <>
        <img className='logoLisandro' src={logo} alt='logo' />

        <div className="link">
            <ul className="link">
                <li><Link to="/"><img className='logoLisandro' src={logo} alt='logo' /></Link></li>
                <li><Link to='/' className="inicio">Inicio</Link></li>
                <li><Link to='AcercaDeMi' className="acercaDeMi">Acerca de mi</Link></li>
                <li><Link to='Servicios' className="servicios">Servicios</Link></li>
                <li><Link to='Contacto' className="contacto">Contacto</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar