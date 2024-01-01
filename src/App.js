import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import ChoosePage from './ChoosePage';
import ServicePage from './ServicePage';
import DoctersPage from './DoctersPage';






function App() {



  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'choose':
        return <ChoosePage />;
      case 'service':
        return <ServicePage />;
      case 'docters':
        return <DoctersPage />;
        case 'contact':
          return <ContactPage />;
      default:
        return <HomePage />;
    }
  }
  return (
    <div className="App">

        <div>
        <nav>
        <div class="navbar">
          <a class="active" href="#home" onClick={() => setCurrentPage('home')}>Home</a>
          <a href="#about" onClick={() => setCurrentPage('about')}>About</a>
          <a href="#service" onClick={() => setCurrentPage('service')}>Services</a>
          <a href="#contact" onClick={() => setCurrentPage('contact')}>Contact Us</a>
          <a href="#docters" onClick={() => setCurrentPage('docters')}>OurTeam</a>
          <div class="login-container">
            <form >
                <button type="submit" action="">Register</button>
                <button href="#choose" onClick={() => setCurrentPage('choose')}>Login</button>
            </form>
          </div>
        </div>

          
        </nav>
      </div>
      <main>{renderPage()}</main>
     </div>
  );
}


export default App;


