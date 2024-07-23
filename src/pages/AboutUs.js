import "../App.css";
import Footer from "../components/Footer";
import OurCompanyInfo from "../components/OurCompanyInfo";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { Zoom } from "react-awesome-reveal";

function AboutUs() {
    return (
        <div className="aboutUs">
        <div className="top-photo aboutUs-photo">
            <Zoom duration="1500">
            <h2 className="top-heading">Our Company</h2>
            </Zoom>
        </div>
            <OurCompanyInfo />
            <Footer />
            <ScrollToTopBtn />
        </div>
    )
}

export default AboutUs;