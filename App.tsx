
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SocialProof />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
