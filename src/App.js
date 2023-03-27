import './App.css';
import React from 'react';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Events from './Components/Events';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
