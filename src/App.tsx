import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Header } from './componentsShared/Header';



function App() {

  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/DetailsCard" element={<DetailsCard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}




export default App;