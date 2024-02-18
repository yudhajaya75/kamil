import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/home/home';
import About from './pages/about/about';
import Article from './pages/blog/Blog';
import ContactUs from './pages/contactUs/contactUs';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import SelectWorker from './pages/selectTag/selectTagWorker';
import SelectStudent from './pages/selectTag/selectTagStudent';
import Profile from './pages/profile/Profile';

function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Routes>
        <Route path='/' element={<Login setEmail={setEmail} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/article' element={<Article />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/login" element={<Login setEmail={setEmail} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/selectworker" element={<SelectWorker />} />
        <Route path="/selectstudent" element={<SelectStudent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
