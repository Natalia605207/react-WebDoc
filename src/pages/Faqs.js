import { Accordion } from "../components/Accordion/Accordion";
import "../App.css";
import Footer from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { Zoom } from "react-awesome-reveal";

function Faqs() {
    return (
        <div className="faqs">
        <div className="top-photo faqs-photo">
        <Zoom duration="1500">
            <h2 className="top-heading">Frequently Asked Questions</h2>
        </Zoom>
        </div>
        <Accordion />
        <Footer />
        <ScrollToTopBtn />
        </div>
    )
}

export default Faqs;