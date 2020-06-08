import React from 'react';
import './App.css';
import "./styles/css/custom.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Techstack from './components/Techstack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Testimonials />
        <Projects />
        <Techstack />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
