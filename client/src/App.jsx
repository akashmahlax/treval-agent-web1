import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light dark:bg-dark transition-all duration-300">
        {/* Navbar is fixed, so it appears on all pages */}
        <Navbar />
        {/* Content changes dynamically based on the route */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;