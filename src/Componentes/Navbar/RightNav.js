import React from 'react';
import styled from 'styled-components';

import whatsapp from '../../../src/Imagenes/whatsapp.png';
import instagram from '../../../src/Imagenes/instagram.png';
import gmail from '../../../src/Imagenes/gmail.png';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 20px;

  .ULlist{
    margin-right: 70px;
    gap: 50px;
  }

  @media (max-width: 412px) {
    flex-flow: column nowrap;
    margin-right: 0;
    position: fixed;
    z-index: 1;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 1px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    .ULlist{
      width: 156px;
      height: 300px;
      padding: 0px 6px ;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column nowrap;
      border-radius: 20px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
      gap: 0px;
      margin-right: 0;
    }
    li{
      margin: 10px 0;
    }
    #iconosNav{
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      gap: 10px;
    }
    .instagram{
        width:25px;
        height: 25px;
      }
      .gmail{
        width:25px;
        height: 25px;
      }
      .whatsapp{
        width:25px;
        height: 25px;
      }
      .m-b{
        margin-top: 40px;
        margin-bottom: 30px;
      }
    }
`;


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>

      {
        open ? 
        (
          <ul className='ULlist'>
            <div className='m-b'>
              <li className='navList'>
                <a href='#inicio' className="inicioNavbar"><span>-</span>Inicio</a>
              </li>
              <li className='navList'>
                <a href="#acercaDeMi" className="acercaDeMiNavbar"><span>-</span>Acerca de mi</a>
                </li>
              <li className='navList'>
                <a href="#servicios" className="serviciosNavbar"><span>-</span>Servicios</a>
              </li>
              <li className='navList'>
                <a href="#contacto" className="contactoNavbar"><span>-</span>Contacto</a>
              </li>
            </div>

            <div className="contenedorIconos" id="iconosNav">
                  <a className="numeroWhatsapp" href="https://instagram.com/escueladefuerza" target="_blank" rel="noopener noreferrer"><img className="instagram" src={instagram} alt="logo"/></a>
                  <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><img className="whatsapp" src={whatsapp} alt="logo"/></a>
                  <a className="numeroWhatsapp" href="mailto:escueladefuerza@gmail.com" target="_blank" rel="noopener noreferrer"><img className="gmail" src={gmail} alt="logo"/></a>
            </div> 
          </ul>
        )
        :
        (
          <ul className='ULlist'>
              <li className='navList'>
                <a href='#inicio' className="inicioNavbar">Inicio</a>
              </li>
              <li className='navList'>
                <a href="#acercaDeMi" className="acercaDeMiNavbar">Acerca de mi</a>
                </li>
              <li className='navList'>
                <a href="#servicios" className="serviciosNavbar">Servicios</a>
              </li>
              <li className='navList'>
                <a href="#contacto" className="contactoNavbar">Contacto</a>
              </li>
            <div className="contenedorIconos" id="iconosNav">
              <a className="numeroWhatsapp" href="https://instagram.com/escueladefuerza" target="_blank" rel="noopener noreferrer"><img className="instagram" src={instagram} alt="logo"/></a>
              <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><img className="whatsapp" src={whatsapp} alt="logo"/></a>
              <a className="numeroWhatsapp" href="mailto:escueladefuerza@gmail.com" target="_blank" rel="noopener noreferrer"><img className="gmail" src={gmail} alt="logo"/></a>
            </div> 
          </ul>
        )
      }
      
    </Ul>
    
  )
}

export default RightNav






      


