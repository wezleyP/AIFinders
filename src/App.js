
import * as React from 'react';
import './index.css';

//cmpts


//img

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

//other

//steps when creating this website 
// 1 install dependencies 
//react-device-detect
//react-router-dom


function App() {
  return (
  <>
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/contact' element = {<Contact />}/>
    </Routes>
  </>
  );
}

export default App;
