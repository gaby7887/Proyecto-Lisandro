import React from "react";
import './servicios.css'
import manServicios from '../../../Imagenes/manServicios.png';
import womanServicios from '../../../Imagenes/womanServicios.png';
import whatsapp from '../../../Imagenes/whassap.png';
import instagram from '../../../Imagenes/instagram.png';
import gmail from '../../../Imagenes/gmail.png';
import circulo from '../../../Imagenes/circulo.png';
// import circulo from '../../../Imagenes/circulo.png';

const Servicios = () => {
    
    return (
        <div className="servicios" >
            <div className="contenedorTitle">
                <h1 id="servicios" className="tituloServicios">Servicios</h1>
                <h5 className="subtituloH5">Acá encontraras nuestros servicios de mentorias y cursos</h5>
            </div>
            <div className="cajaContenedora">
                <div className="contenedorMentorias">
                    <div>
                        <h2 className='subtituloMentorias'>Mentorias</h2>
                    </div>  

                    <div className="parrafoMentorias">
                        <p className="primerParrafosMentorias"> 
                            Mientras nos tomamos unos mates o un café. Puede ser virtual o presencial.
                            Tenes tiempo de que charlemos de un tema que te cueste resolver o dudas,
                            que con tanta información en internet, no sepas como abordar.
                        </p>
                        <p className="segundoParrafosMentorias">
                            Podemos coordinar mentorías 1 a 1 o en grupos de hasta 5 participantes.
                            Usualmente lo que usamos para clubes o instituciones deportivas.
                        </p>        
                    </div>

                    <div className="fotoMan" >
                        <img src={manServicios} alt="logo"/>
                    </div>

                    <div className="contenedorWhassapMentorias">
                        <div className="cajaSaberMasMentorias">
                            <img className="circulo" src={circulo} alt="logo"/>
                            <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><span className="textoSaberMas">Deseo saber más</span></a>
                        </div>  

                        <div className="whatsappMan">
                            <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><img className="whatsapp" src={whatsapp} alt="logo"/></a>
                        </div> 
                    </div>

                </div>
                <div className="contenedorMentorias">
                    <div>
                        <h2 className='subtituloCursos'>Cursos</h2>
                    </div>  

                    <div  className="parrafoCursos">
                        <p className="parrafoCursos">
                            Podes elegir cursos OnDemand, para que los realices a tu tiempo, con acceso
                            ilimitado al curso y a la bibliografía. Estan catalogados desde lo más básico
                            a lo más avanzado, para que puedas realizarlo a tu ritmo y puedas incorporar
                            tu propio SkillTree para que te especialices en lo que necesites.
                        </p>
                    </div> 

                    <div className="fotoWoman">
                        <img className="manServicios" src={womanServicios} alt="logo"/>
                    </div>

                    <div className="contenedorWhassapCursos">
                        <div className="cajaSaberMasMentorias">
                            <img className="circulo" src={circulo} alt="logo"/>
                            <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><span className="textoSaberMas">Deseo saber más</span></a>
                        </div>  

                        <div className="whatsappMan">
                            <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><img className="whatsapp" src={whatsapp} alt="logo"/></a>
                        </div> 
                    </div>

                </div>
            </div>

            <div className="center margin-t">
                <div>
                    <h2 id="contacto">Pueden encontrarme en:</h2>
                </div>
                <div className="contenedorIconos">
                    <a className="numeroWhatsapp" href="https://instagram.com/escueladefuerza" target="_blank" rel="noopener noreferrer"><img className="instagram" src={instagram} alt="logo"/></a>
                    <a className="numeroWhatsapp" href="mailto:escueladefuerza@gmail.com" target="_blank" rel="noopener noreferrer"><img className="gmail" src={gmail} alt="logo"/></a>
                    <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><img className="whatsapp" src={whatsapp} alt="logo"/></a>
                </div>
            </div>

        </div>
        
    )
}

export default Servicios