import React from "react";
import './header.css';
import vector from '../../../Imagenes/vector.png';
import fotoLisandro from '../../../Imagenes/fotoLisandro.png';
import rectangulo from '../../../Imagenes/rectangulo.png';

const Inicio = () => {
    return (
        <>

        <div className="home">
           <div className="divFotoLisandro">
                <img className="fotoLisandro" src={fotoLisandro} alt="logo"/>
            </div>
      
            <div className="cajaTitleHome">
                <h1 className="titleHome">Lisandro Cacciatore</h1>
                <div className="lineaHome">
                    <img className="rectangulo" src={rectangulo} alt="logo"/>
                </div>
            </div>  

            <div className="contenedorEscuelaDeFuerza">
                <div className="cajaSubtituloHome">
                    <p className="parrafoSobreMi">-Sobre mi</p>
                    <h2 className="subtituloHome">Escuela de fuerza</h2>
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
                        <img className="vector" src={vector} alt="logo"/>
                        <a href="/AcercaDeMi"><button className="leerMas">Leer más...</button></a>
                        <a className="numeroWhatsapp" href="https://wa.me/+5493415040228"><button className="comienzaTuEntrenamiento"><span className="textoBoton">Comienza tu entrenamiento</span></button></a>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Inicio