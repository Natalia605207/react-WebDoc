import { Accordion } from "../components/Accordion/Accordion";
import "../App.css";
import Footer from "../components/Footer";

function Faqs() {
    return (
        <div className="faqs">
        <div className="top-photo faqs-photo">
            <h2 className="top-heading">Frequently Asked Questions</h2>
        </div>
        <Accordion />
        <Footer />
        </div>
    )
}

export default Faqs;