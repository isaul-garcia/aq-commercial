import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import GlobalStyle from './globalStyles'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Thanks } from './pages'
import { About, Footer, Navbar } from './components'
import AriUberti from './pages/Projects/AriUberti/AriUberti'
import Botanica from './pages/Projects/Botanica/Botanica'
import Fujifilm from './pages/Projects/Fujifilm/Fujifilm'
import Haven from './pages/Projects/Haven/Haven'
import Mountain from './pages/Projects/Mountain/Mountain'
import Rolling from './pages/Projects/Rolling/Rolling'
import Swamp from './pages/Projects/Swamp/Swamp'

const App = () => {
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
        <Route path="/ari-uberti" element={<AriUberti />} />
        <Route path="/botanica-co" element={<Botanica />} />
        <Route path="/fujifilm" element={<Fujifilm />} />
        <Route path="/haven-hospice" element={<Haven />} />
        <Route path="/mountain-view-water" element={<Mountain />} />
        <Route path="/rolling-tin-coffee" element={<Rolling />} />
        <Route path="/swamp-restaurant" element={<Swamp />} />
        <Route path="/about" element={<About />} />
        <Route path="/thankyou" element={<Thanks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
