import React from 'react';
import styled from 'styled-components';

import whatsapp from '../../../src/Imagenes/whatsapp.png';
import instagram from '../../../src/Imagenes/instagram.png';
import gmail from '../../../src/Imagenes/gmail.png';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 50px;
  }


  @media (max-width: 412px) {
    flex-flow: column nowrap;
    
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 10px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    .ULlist{
      display: flex;
      flex-direction:column
  }
  }
`;

const Img = styled.img`
display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
       
@media (max-width: 412px) {
    
    .contenedorIconos img {
        width: 50%;
        height: 50%;   
    }
}    
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <ul className='ULlist'>
        <li className='navList'>
          <a href='#inicio' className="inicioNavbar">Inicio</a>
        </li>
        <li className='navList'>
          <a href="#acercaDeMi"className="acercaDeMiNavbar">Acerca de mi</a>
          </li>
        <li className='navList'>
          <a href="#servicios" className="serviciosNavbar">Servicios</a>
        </li>
        <li className='navList'>
          <a href="#contacto" className="contactoNavbar">Contacto</a>
        </li>
      </ul>
      <div className="contenedorIconos">
            <a className="numeroWhatsapp" href="https://instagram.com/escueladefuerza" target="_blank" rel="noopener noreferrer"><img className="instagram" src={instagram} alt="logo"/></a>
            <a className="numeroWhatsapp" href="mailto:escueladefuerza@gmail.com" target="_blank" rel="noopener noreferrer"><img className="gmail" src={gmail} alt="logo"/></a>
            <a className="numeroWhatsapp" href="https://wa.me/5493415040228"><img className="whatsapp" src={whatsapp} alt="logo"/></a>
      </div> 
    </Ul>
    
  )
}

export default RightNav