import { Accordion } from "../components/Accordion/Accordion";
import "../App.css";
import Footer from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

function Faqs() {
    return (
        <div className="faqs">
        <div className="top-photo faqs-photo">
            <h2 className="top-heading">Frequently Asked Questions</h2>
        </div>
        <Accordion />
        <Footer />
        <ScrollToTopBtn />
        </div>
    )
}

export default Faqs;