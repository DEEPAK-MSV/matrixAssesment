import React from 'react';
import './index.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/services';
import ValueFramework from './Components/valueFramework';
import Testimonials from './Components/testimonials';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ValueFramework />
        <Testimonials />
        <Services />
      </main>
    </div>
  );
}

export default App;