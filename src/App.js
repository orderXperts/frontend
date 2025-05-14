import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import XpertsHome from './components/Xperts_Restaurant/XpertsHome';

function App() {
  return (
    <Router>
      <div className="roboto-slab">
        <ScrollToTop />
          <Routes>
            <Route exact path='/*' element={<XpertsHome />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
