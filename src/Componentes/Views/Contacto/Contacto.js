import React from "react";
import './contacto.css'
import fotoContacto1 from '../../../Imagenes/fotoContacto1.png'
import fotoContacto2 from '../../../Imagenes/fotoContacto2.png'
import fotoContacto3 from '../../../Imagenes/fotoContacto3.png'
import fotoContacto4 from '../../../Imagenes/fotoContacto4.jpg'
import ellipse3 from '../../../Imagenes/Ellipse 1.png'
import ellipse4 from '../../../Imagenes/Ellipse 4.png'


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
                        <a className="numeroWhatsapp" href="https://wa.me/+5493415040228"><button className="buttonContacto">Contáctame</button></a>
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
            <div >
                <img className="ellipse3" src={ellipse3} alt="logo"/>
            </div> 
            <div >
                <img className="ellipse5" src={ellipse4} alt="logo"/>
            </div> 
        </div>
    )
}

export default Contacto