import React from 'react';
import './App.css';

import { Home } from './pages/Home/Home';
import { Header } from './componentsShared/Header';




function App() {

  return (
    <section>
      <Header />
      <Home />
    </section>
  );
}



export default App;
