import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import LicenseTermsPage from "./pages/LicenseTermsPage";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navigation/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Navigation/Footer";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/license-terms" element={<LicenseTermsPage />} />
        <Route path="/buy-now" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {location.pathname !== "/dashboard" && <Footer />}
    </div>
  );
}

export default App;
