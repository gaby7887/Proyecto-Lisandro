import React from "react";
import './contacto.css'
import fotoContacto1 from '../../../Imagenes/fotoContacto1.png'
import fotoContacto2 from '../../../Imagenes/fotoContacto2.png'
import fotoContacto3 from '../../../Imagenes/fotoContacto3.png'
import fotoContacto4 from '../../../Imagenes/fotoContacto4.jpg'

const Contacto = () => {
    return (
        <div className="contacto">
            <img 
                className="fotoContacto4"
                src={fotoContacto4}
            />
            <div className="containerImgTexto">
                <div className="textoButton">
                    <div className="containerTexto">
                        <p className="textoContacto">"La clave para iniciar algo es dejar de hablar y ponerse a realizar"</p>
                    </div>
                    <div>
                        <button className="buttonContacto">Contáctame</button>
                    </div>
                </div>
                <div>
                    <img 
                        className="imagenUno"
                        src={fotoContacto1}
                    />
                </div>
                <div>
                    <img 
                        className="imagenDos"
                        src={fotoContacto2}
                    />
                </div>
                <div>
                    <img 
                        className="imagenTres"
                        src={fotoContacto3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contacto