import React from 'react';
import Nav from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
 

// Make sure this path is correct based on where Nav.jsx is located

const App = () => {
  return (
    <>
      <Nav /> {/* Use the Nav component here */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection/>
      </div>
     
    </>
  );
}

export default App;
