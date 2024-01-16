import "../App.css";
import Footer from "../components/Footer";
import OurCompanyInfo from "../components/OurCompanyInfo";

function AboutUs() {
    return (
        <div className="aboutUs">
        <div className="top-photo aboutUs-photo">
            <h2 className="top-heading">Our Company</h2>
        </div>
            <OurCompanyInfo />
            <Footer />
        </div>
    )
}

export default AboutUs;