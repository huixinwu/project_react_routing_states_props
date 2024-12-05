import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbars';
import Entrees from './components/entrees';
import Desserts from './components/desserts';
import Cocktails from './components/cocktails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <br/><br/>
        <Navbar />
        <hr/>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route index element={<Home />}/>
          <Route path='/entrees' element={<Entrees/>}/>
          <Route path='/desserts' element={<Desserts/>}/>
          <Route path='/cocktails' element={<Cocktails/>}/>
        </Routes>
        <br/><p><em>"There's no place like Mom's!" - Mom</em></p><br/>
      </div>
    </BrowserRouter>
  );
}

export default App;
