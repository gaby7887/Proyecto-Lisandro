import React from "react";
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Inicio from './Componentes/Views/Home/Home';
import AcercaDeMi from "./Componentes/Views/AcercaDeMi/AcercaDeMi";
import Servicios from "./Componentes/Views/Servicios/Servicios";
import Contacto from "./Componentes/Views/Contacto/Contacto";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/AcercaDeMi" element={<AcercaDeMi />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>  
  );
}

export default App;
