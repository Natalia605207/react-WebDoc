import React from "react";
import CarouselPage from "../components/Carousel/CarouselPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import MediCare from "../components/MediCare";
import GeneralInfo from "../components/GeneralInfo";
import Counter from "../components/Counter/Counter";
import Form from "../components/Form";
import HomePageDoctors from "../components/HomePageDoctors";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    const { isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <div className="home-page">
            <CarouselPage />
            <MediCare />
            <GeneralInfo />
            <Counter />
            <HomePageDoctors />
            <Testimonials />
            <div id="form-page">
            <Form />
            </div>
            <div id="contacts">
            <Footer />
            </div>
            <ScrollToTopBtn />
        </div>
    )
)}

export default Home;