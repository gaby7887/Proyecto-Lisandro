import React from "react";
import Footer from "../Footer/Footer";
import Contacto from "../Views/Contacto/Contacto";
import Servicios from "../Views/Servicios/Servicios";

import Header from '../Views/Header/Header'
import AcercaDeMi from "../Views/AcercaDeMi/AcercaDeMi";

const Home = () => {
    return (
        <>
            <Header/>
            <AcercaDeMi/>
            <Servicios/>
            <Contacto/>
            <Footer/>
        </>
    )
}

export default Home