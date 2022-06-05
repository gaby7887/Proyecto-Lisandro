import React from "react";
import './acercaDeMi.css'
import imagen from '../../../Imagenes/pesa.jpeg'
import ellipse2 from '../../../Imagenes/Ellipse 1.png'
import ellipse4 from '../../../Imagenes/Ellipse 4.png'

const AcercaDeMi = () => {
    return (
        <div className="acercaDeMi" >
            <div className="flexInterno">
                <div className="containerContenido">
                    <div className="containerTextAcerca">
                        <h4 id="acercaDeMi" className="title">Acerca de Mi</h4>
                        <div className="parrafos">
                            <p>
                                Hola, mi nombre Lisandro Cacciatore. Soy Licenciado en Educación Física y un apasionado por  el estudio del entrenamiento.
                            </p>
                            <p>
                                Tengo que confesarte que nunca fui un gran deportista o uno que se destacara por su habilidad. A los 15 años me hice una pregunta: <span className="textoBold">¿Cómo puedo con lo que tengo hacer algo mejor?</span>
                            </p>
                            <p>
                                ¿Te la hiciste alguna vez? Espero que sí.
                            </p>
                            <p>
                                A mi esa pregunta, me llevo a mas de 20 años de estudio y practica sobre lo-s diversos métodos de entrenamiento y como se aplican en los distintos deportes. Durante este recorrido, pude compartir experiencias con muchos deportistas de distintos niveles y con distintas necesidades. Los mismos que tal vez hoy te estas encontrando.
                            </p>
                            <p>
                                Durante ese recorrido, trabajamos codo a codo con Powerlifters, Levantadores Olímpicos, Luchadores de todo tipo e incontables deportistas de Futbol, Rugby, Hockey entre otros. Ahí encontré que ante las necesidades especificas de cada uno, todos los deportes comparten principios y reglas básicas que si las aplicas de la manera correcta, el avance es más veloz.
                                Mi idea desde este espacio, es poder ayudarte a que el <span className="textoBold">recorrido que yo hice en 20 años, vos lo puedas hacer en 10</span>, para que tus alumnos, algún día, lo puedan hacer en 5.
                            </p>
                            <div>
                                <p className="textoBold">
                                    Escuela de Fuerza no es solo un lugar de entrenamiento, es también un lugar de construcción de saber.
                                </p>
                                <p>¿Te gustaría ser parte?</p> 
                                <p>¡Te espero!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img 
                        className="img"
                        src={imagen}
                    />
                </div>

            </div>
            
            <div className="contenedorSubtitle">
                <h3 className="subTitle">“Para tener éxito, en primer lugar debemos creer que podemos”</h3>
            </div>
            <div >
                <img className="ellipse2" src={ellipse2} alt="logo"/>
            </div> 
            <div >
                <img className="ellipse4" src={ellipse4} alt="logo"/>
            </div> 
        </div>
    )
}

export default AcercaDeMi