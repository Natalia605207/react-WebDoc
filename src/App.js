import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Faqs from "./pages/Faqs";
import AboutUs from "./pages/AboutUs";
import DoctorDetails from "./pages/DoctorDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/faqs" element={<Faqs/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/doctors/:title" element={<DoctorDetails/>} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/contacts" element={<Footer/>} />
    </Routes>
  </Router>
}

export default App;