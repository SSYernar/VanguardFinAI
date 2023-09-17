import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import Footer from './components/footer';
import Ai from './pages/ai';
import SignUp from './pages/signup';
import Login from './pages/login';
import LogOut from './pages/logout';
import Budget from './pages/budget'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/ai' element={<Ai />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/budget' element={<Budget />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
