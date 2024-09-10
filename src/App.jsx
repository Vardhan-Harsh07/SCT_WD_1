import React from 'react';
import Nav from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
 
import Testimonials from './components/Staff';
import Footer from './components/Footer';
import Workflow from './components/workflow';


 

// Make sure this path is correct based on where Nav.jsx is located

const App = () => {
  return (
    <>
      <Nav /> {/* Use the Nav component here */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection/>
      <Workflow/>
      <Testimonials/>
      <Footer/>
      </div>
     
    </>
  );
}

export default App;
