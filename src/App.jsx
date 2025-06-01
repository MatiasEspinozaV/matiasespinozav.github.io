import { useState } from 'react'
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactForm from './sections/ContactForm';
import './styles/App.css';
import Nube from './assets/NubeJinx.png'
import ScrollAnimado from './components/ScrollAnimado';

function App() {
  return (
    <div>
      <header className="navbar">
        <img src={Nube} alt="Nube" className="navbar-logo"/>
      </header>
      <Hero />
      <div className='div'></div>
      <Skills />
      <div className='div'></div>
      <Projects />
      <div className='div'></div>
      <ContactForm />
      <a href='/'>
        <footer className='footer'>
          <img src={Nube} alt="Nube" className="footer-logo"/>
        </footer>
      </a>
    </div>
  );
}

export default App
