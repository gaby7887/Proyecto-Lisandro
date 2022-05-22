import React from "react";
import './servicios.css'
import manServicios from '../../../Imagenes/manServicios.png';
import womanServicios from '../../../Imagenes/womanServicios.png';

const Servicios = () => {
    
    return (
        <div className="servicios">
            <h1 className="tituloServicios">Servicios</h1>
            <h5 className="subtituloH5">Acá encontraras nuestros servicios de mentorias y cursos</h5>
            <div className="cajaContenedora">
                <div className="contenedorMentorias">
                    <div>
                        <h2 className='subtituloMentorias'>Mentorias</h2>
                    </div>
                    
                    <div className="parrafoMentorias">
                        <p> 
                            Mientras nos tomamos unos mates o un café. Puede ser virtual o presencial.
                            Tenes tiempo de que charlemos de un tema que te cueste resolver o dudas,
                            que con tanta información en internet, no sepas como abordar.
                        </p>
                        <p>
                            Podemos coordinar mentorías 1 a 1 o en grupos de hasta 5 participantes.
                            Usualmente lo que usamos para clubes o instituciones deportivas.
                        </p>

                        <img className="manServicios" src={manServicios} alt="logo"/>
                        <div>
                            <span className="textoSaberMas">Deseo saber más</span>
                        </div>       
                    </div>

                </div>
                <div className="contenedorCursos">
                    <div className="contenedorSubtituloCursos">
                        <h2 className='subtituloCursos'>Cursos</h2>
                    </div>
                    <div>
                        <p className="parrafoCursos">
                            Podes elegir cursos OnDemand, para que los realices a tu tiempo, con acceso
                            ilimitado al curso y a la bibliografía. Estan catalogados desde lo más básico
                            a lo más avanzado, para que puedas realizarlo a tu ritmo y puedas incorporar
                            tu propio SkillTree para que te especialices en lo que necesites.
                        </p>
        
                        <img className="womanServicios" src={womanServicios} alt="logo"/>
                        <div>
                            <span className="textoSaberMas">Deseo saber más</span>
                            <i class='bx bxl-whatsapp'></i>
                            
                        </div>
                        
                    </div>        
                </div>
            </div>
        </div>
        
    )
}

export default Servicios