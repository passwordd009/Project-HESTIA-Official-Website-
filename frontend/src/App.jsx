import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Districts from './pages/Districts';
import Partners from './pages/Partners';
import Founders from './pages/Founders';
import Donate from './pages/Donate';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/districts" element={<Districts />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/thank-you" element={<Donate completed />} />
          <Route path="/partner-with-us" element={<Navigate to="/partners" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
