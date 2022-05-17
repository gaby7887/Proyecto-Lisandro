import React from "react";
import './Home.css';
import fotoLisandro from '../../../Imagenes/fotoLisandro.png';
import logo from '../../../Imagenes/logo.png';

const Inicio = () => {
    return (
        <>
        
        <div className="entornoLogo">
            <img className='logoLisandro' src={logo} alt='logo' />
        </div>
        
        <img className="fotoLisandro" src={fotoLisandro} alt="logo"/>
      
        <div>
            <h1>Lisandro Cacciatore</h1>
        </div>

       
        <div className="linea"></div>
        
        
        <h2>Escuela de fuerza</h2>
        
        <div className="inicioPresentacion">
            <p>Hola, mi nombre es Lisandro Cacciatore. Soy Licenciado
                en Educación Física y un apasionado por el estudio 
                del entrenamiento.
                Tengo que confesarte que nunca fui un gran
                deportista o uno que se destacara por su habilidad.
                <button className="leerMas">Leer más...</button>
            </p>
            
            <button className="comienzaTuEntrenamiento"><span className="textoBoton">Comienza tu entrenamiento</span></button>
        </div>

        

        

        
        <div>
            <p></p>
        </div>
        </>
    )
}

export default Inicio