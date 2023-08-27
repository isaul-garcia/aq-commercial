import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import GlobalStyle from './globalStyles'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { About, Footer, Navbar } from './components'
import LocalProvisions from './pages/Projects/LocalProvisions/LocalProvisions'
import AriUberti from './pages/Projects/AriUberti/AriUberti'
import Botanica from './pages/Projects/Botanica/Botanica'
import Mountain from './pages/Projects/Mountain/Mountain'
import Rolling from './pages/Projects/Rolling/Rolling'
import Swamp from './pages/Projects/Swamp/Swamp'
import Cognac from './pages/Projects/Cognac/Cognac'
import KingState from './pages/Projects/KingState/KingState'

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
        <Route path="/local-provisions" element={<LocalProvisions />} />
        <Route path="/ari-uberti" element={<AriUberti />} />
        <Route path="/botanica-co" element={<Botanica />} />
        <Route path="/mountain-view-water" element={<Mountain />} />
        <Route path="/rolling-tin-coffee" element={<Rolling />} />
        <Route path="/swamp-restaurant" element={<Swamp />} />
        <Route path="/ap-cognac" element={<Cognac />} />
        <Route path="/king-state" element={<KingState />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
