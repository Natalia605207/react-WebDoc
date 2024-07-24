import { Accordion } from "../components/Accordion/Accordion";
import "../App.css";
import Footer from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { Zoom } from "react-awesome-reveal";
import { useAuth0 } from "@auth0/auth0-react";

function Faqs() {
    const { isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
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
)}

export default Faqs;