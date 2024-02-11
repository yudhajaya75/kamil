import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/home/home';
import About from './pages/about/about';
import Article from './pages/blog/Blog';
import ContactUs from './pages/contactUs/contactUs';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/article' element={<Article />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/login" element={<Login setEmail={setEmail} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
