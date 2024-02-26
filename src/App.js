import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Contact from './Components/Pages/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home" className="page-section"><Home /></section>
      <section id="about" className="page-section"><About /></section>
      <section id="service" className="page-section service-section-height"><Service /></section>
      <section id="contact" className="page-section"><Contact /></section>
    </div>
  );
}

export default App;
