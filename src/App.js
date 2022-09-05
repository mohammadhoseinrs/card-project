import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';
import { useState } from 'react';
import HamburgeMenu from './components/HamburgeMenu';

function App() {
  const [showHam,setShowHam]=useState(false)

  return (
    <div className="App">
      <div className="app__container">
      <div className={showHam ? 'hamburger__menu' : 'hamburger__menu2'}>
    <HamburgeMenu setShowHam={setShowHam}  />
  </div>
     <Header setShowHam={setShowHam} />
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <Section7 />
      <Footer />
      </div>
    </div>
  );
}

export default App;
