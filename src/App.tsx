import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/home/home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import SelectWorker from './pages/selectTag/selectTagWorker';
import SelectStudent from './pages/selectTag/selectTagStudent';
import Profile from './pages/profile/Profile';
import WrongPage from './pages/wrongpage/WrongPage';
import SwapRecomendation from './pages/swaprecomendation/SwapRecomendation';

function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Routes>
        <Route path='/' element={<Login setEmail={setEmail} />} />
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login setEmail={setEmail} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/selectworker" element={<SelectWorker />} />
        <Route path="/selectstudent" element={<SelectStudent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wrong" element={<WrongPage />} />
        <Route path="/swaprecomen" element={<SwapRecomendation />} />
      </Routes>
    </>
  );
}

export default App;
