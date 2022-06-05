import React from "react";
import './header.css';
import vector from '../../../Imagenes/Vector.png';
import fotoLisandro from '../../../Imagenes/fotoLisandro.png';
import rectangulo from '../../../Imagenes/rectangulo.png';
import ellipse from '../../../Imagenes/ellipse.png';
import ellipse1 from '../../../Imagenes/Ellipse 1.png';

const Inicio = () => {
    return (
        <>

        <div className="home" id="inicio">
            <div className="divFotoLisandro">
                <div>
                    <div>
                        <img className="ellipse" src={ellipse} alt="logo"/>
                    </div>  
                    <div>
                        <img className="fotoLisandro" src={fotoLisandro} alt="logo"/>
                    </div>
                </div>
        
                <div className="cajaTitleHome">
                    <h1 className="titleHome">Lisandro Cacciatore<span className="punto">.</span></h1>
                    <div className="lineaHome">
                        <img className="rectangulo" src={rectangulo} alt="logo"/>
                    </div>
                </div>  
            </div>

            <div className="contenedorEscuelaDeFuerza">
                <div className="cajaSubtituloHome">
                    <p className="parrafoSobreMi"><span>-</span>Sobre mi</p>
                    <h2 className="subTituloHome">Escuela de fuerza</h2>
                    <div className="linea"></div>
                </div>
         
                <div className="inicioPresentacion">
                    <div>
                        <p className="textoPresentacion">Hola, mi nombre es Lisandro Cacciatore. Soy Licenciado
                        en Educación Física y un apasionado por el estudio 
                        del entrenamiento.
                        Tengo que confesarte que nunca fui un gran
                        deportista o uno que se destacara por su habilidad.   
                        </p>
                        <div className="contenedorLeerMas">
                            <img className="vector" src={vector} alt="logo"/>
                            <a href="#acercaDeMi"><button className="leerMas">Leer más...</button></a>
                        </div>
                        <a className="numeroWhatsapp" href="https://wa.me/+5493415040228"><button className="comienzaTuEntrenamiento"><span className="textoBoton">Comienza tu entrenamiento</span></button></a>
                    </div>
                </div>
                <div >
                    <img className="ellipse1" src={ellipse1} alt="logo"/>
                </div> 
            </div>  
        </div>

        </>
    )
}

export default Inicio