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

function Home() {
    return (
        <div className="home-page">
            <CarouselPage />
            <MediCare />
            <GeneralInfo />
            <Counter />
            <HomePageDoctors />
            <Testimonials />
            <Form />
            <Footer />
        </div>
    )
}

export default Home;