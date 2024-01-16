import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonials.css";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

function Testimonials() {
    return(
        <section>
            <div className="column">
                <h1 className="heading">Our Patients Say</h1>
                <p className="text">View the feedback from our patients</p>
                <TestimonialsCarousel />
            </div>

            
        </section>
    )
}

export default Testimonials;