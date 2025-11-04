// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BalconySafetyNets from './pages/services/BalconySafetyNets';
import ChildrenSafetyNets from './pages/services/ChildrenSafetyNets';
import ConstructionSafetyNets from './pages/services/ConstructionSafetyNets';
import DuctAreaSafetyNets from './pages/services/DuctAreaSafetyNets';
import IndustrialSafetyNets from './pages/services/IndustrialSafetyNets';
import BalconyClothesHanger from './pages/services/BalconyClothesHanger';
import PigeonSafetyNets from './pages/services/PigeonSafetyNets';
import BalconyInvisibleGrid from './pages/services/BalconyInvisibleGrid';
import ScrollToTop from './components/ScrollToTop';
import BlogIndex from './pages/blog/BlogIndex';
import PigeonSafetyNetsBlog from './pages/blog/PigeonSafetyNetsBlog';
import BengaluruBalconySafetyBlog from './pages/blog/BengaluruBalconySafetyBlog';
// import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
           <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/balcony-safety-nets" element={<BalconySafetyNets />} />
            <Route path="/children-safety-nets" element={<ChildrenSafetyNets />} />
            <Route path="/construction-safety-nets" element={<ConstructionSafetyNets />} />
            <Route path="/duct-area-safety-nets" element={<DuctAreaSafetyNets />} />
            <Route path="/industrial-safety-nets" element={<IndustrialSafetyNets />} />
            <Route path="/balcony-clothes-hanger" element={<BalconyClothesHanger />} />
            <Route path="/pigeon-safety-nets" element={<PigeonSafetyNets />} />
            <Route path="/balcony-invisible-grid" element={<BalconyInvisibleGrid />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/why-pigeon-safety-nets-are-a-must-have-for-modern-homes" element={<PigeonSafetyNetsBlog />} />
            <Route path="/blog/bengaluru-homeowners-guide-to-balcony-safety" element={<BengaluruBalconySafetyBlog />} />
          </Routes>
        </main>
        {/* <Analytics /> */}
        <Footer />
        <FloatingContacts />
      </div>
    </Router>
  );
}

export default App;