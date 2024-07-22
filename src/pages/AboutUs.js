import "../App.css";
import Footer from "../components/Footer";
import OurCompanyInfo from "../components/OurCompanyInfo";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

function AboutUs() {
    return (
        <div className="aboutUs">
        <div className="top-photo aboutUs-photo">
            <h2 className="top-heading">Our Company</h2>
        </div>
            <OurCompanyInfo />
            <Footer />
            <ScrollToTopBtn />
        </div>
    )
}

export default AboutUs;