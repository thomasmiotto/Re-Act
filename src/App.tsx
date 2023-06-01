import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { DetailsPage } from './pages/Details/DetailsPage';



function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movie/:movieId' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}




export default App;