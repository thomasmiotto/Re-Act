import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Header } from './componentsShared/Header';
import { DetailsPage } from './pages/Details/DetailsPage';



function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movie/:movieId' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;