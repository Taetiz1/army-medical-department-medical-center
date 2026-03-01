import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceSteps from './pages/ServiceSteps';
import Clinics from './pages/Clinics';
import Rights from './pages/Rights';
import Contact from './pages/Contact';
import AfterTreatment from './pages/AfterTreatment';
import News from './pages/News';
import FAQ from './pages/FAQ';
import NewsContent from './pages/NewsContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrgMission from './pages/OrgMission';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/steps" element={<ServiceSteps />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/after" element={<AfterTreatment />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news/:id" element={<NewsContent />} />
            <Route path="/org" element={<OrgMission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
