import React from "react";
import './footer.css'
import logoFooter from '../../Imagenes/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="containerFooter">
                <a href="http://localhost:3000/">
                    <img 
                        className="logoFooter" 
                        src={logoFooter}
                    />
                </a>
                
                <p className="textoFooter">@LISANDROCACCIATORE</p>
                <p className="textoFooter">2022</p>
            </div>
        </div>

    )
}

export default Footer