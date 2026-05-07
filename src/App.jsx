import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AidSignal from './pages/AidSignal';

import CornerNeuralBackground from './components/CornerNeuralBackground/CornerNeuralBackground';

import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <CornerNeuralBackground />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/aid-signal" element={<AidSignal />} />
          </Routes>
          <Footer />
        </Router>
      </LanguageProvider>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;