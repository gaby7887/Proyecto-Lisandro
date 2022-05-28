import React from "react";
import Navbar from './Componentes/Navbar/Navbar';
import './styles/normalize.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import AcercaDeMi from "./Componentes/Views/AcercaDeMi/AcercaDeMi";
import Servicios from "./Componentes/Views/Servicios/Servicios";
import Contacto from "./Componentes/Views/Contacto/Contacto";
import Home from "./Componentes/MainPage/Home";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AcercaDeMi" element={<AcercaDeMi />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>  
  );
}

export default App;
