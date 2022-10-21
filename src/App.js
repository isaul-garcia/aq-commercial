import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader'
import GlobalStyle from './globalStyles'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Form, Thanks } from './pages'
import { Navbar } from './components'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [isScroll, setIsScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Figtree']
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thankyou" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
