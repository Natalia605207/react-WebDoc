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
import { BottomNav } from "./components/BottomNavigation/BottomNav";
import CookieConsent from "react-cookie-consent";
import Cookies from 'js-cookie';

function App() {
  return (
  <>
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline All"
        cookieName="myAppCookieConsent"
        style={{ background: "#fff", color: "#000000", justifyContent: "center", textAlign: "center", boxShadow: "2px 2px 10px #000000" }}
        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#009282", padding: "7px 20px", borderRadius: "3px", border: '1px solid #009282' }}
        declineButtonStyle={{ color: "#009282", fontSize: "13px",  background: "#fff", border: '1px solid #009282',  padding: "7px 20px", borderRadius: "3px" }} 
        expires={5}
        enableDeclineButton
        onAccept={() => {
          Cookies.set('userConsent', 'true', { expires: 5 }); 
        }}
        onDecline={() => {
          Cookies.set('userConsent', 'false', { expires: 5 }); 
        }}
      >
        This website uses cookies provided to enhance user experience and analyze performance and traffic
        on our website. <a href="/privacy"><span className="privacy-link">Learn more about gathering information.</span></a>
      </CookieConsent>
      <Router>
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
        <BottomNav />
      </Router>
  </>
)}

export default App;