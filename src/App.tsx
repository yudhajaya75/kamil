import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './pages/home/home'
import About from './pages/about/about'
import Article from './pages/blog/Blog';
import ContactUs from './pages/contactUs/contactUs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/article' element={<Article />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
