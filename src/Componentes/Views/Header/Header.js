import React from "react";
import './header.css';
import fotoLisandro from '../../../Imagenes/fotoLisandro.png';

const Inicio = () => {
    return (
        <>

        <div className="home">
           <div className="divFotoLisandro">
                <img className="fotoLisandro" src={fotoLisandro} alt="logo"/>
            </div>
      
            <div className="cajaTitleHome">
                <h1 className="titleHome">Lisandro Cacciatore</h1>
                <div className="lineaHome"></div>
            </div>  

            <div className="contenedorEscuelaDeFuerza">
                <div className="cajaSubtituloHome">
                    <p>-Sobre mi</p>
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
                        <button className="leerMas">Leer más...</button>
                        <button className="comienzaTuEntrenamiento"><span className="textoBoton">Comienza tu entrenamiento</span></button>
                    </div>            
                </div>
            </div>
        </div>

        </>
    )
}

export default Inicio