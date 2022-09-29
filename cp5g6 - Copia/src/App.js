import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Header from './componentes/Header';
import Home from "./componentes/Home";
import Cardapio from "./componentes/Cardapio";
import QuemSomos from "./componentes/QuemSomos";


function App() {
  return (
    <BrowserRouter className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cardapio" element={<Cardapio/>}/>
        <Route path="/quem_somos" element={<QuemSomos/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
