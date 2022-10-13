import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Portafolio from './pages/Portafolio'
import './css/Inicio.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Inicio />} exact />
        <Route path="/portafolio" element={<Portafolio />} exact />
        <Route path="/sobre-mi" element={<Sobre />} exact />
        <Route path="/contacto" element={<Contacto />} exact />
      </Routes>
    </ BrowserRouter>
  </>
);