import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import UpButton from './components/upButton.jsx';
import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';
import Footer from './components/Footer.jsx';
 

// Lazy loaded components
// const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
 
        <Route path="/" element={<Page1 />} /> {/* Route for Home */}
        <Route path="/product" element={<Page2 />} /> {/* Route for Product Page */}
      </Routes>
    <Footer/>
      <UpButton />
    </>
  );
};

export default App;
