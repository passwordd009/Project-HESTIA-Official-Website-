import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About        from './pages/About';
import HowItWorks   from './pages/HowItWorks';
import Districts    from './pages/Districts';
import Partners     from './pages/Partners';
import Founders     from './pages/Founders';
import PartnerWithUs from './pages/PartnerWithUs';
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      {/* Sticky navigation */}
      <Navbar />
      <ScrollToTop />
      {/* Page content */}
      <main>
        <Routes>
          
          {/* Default route → About */}
          <Route path="/"               element={<Navigate to="/about" replace />} />
          <Route path="/about"          element={<About />} />
          <Route path="/how-it-works"   element={<HowItWorks />} />
          <Route path="/districts"      element={<Districts />} />
          <Route path="/partners"       element={<Partners />} />
          <Route path="/founders"       element={<Founders />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />

          {/* Catch-all → redirect home */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>

      {/* Persistent footer */}
      <Footer />
    </BrowserRouter>
  );
}
