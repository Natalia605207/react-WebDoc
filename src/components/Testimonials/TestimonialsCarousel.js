import { dataTestimonials } from "./dataTestimonials";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "./Testimonials.css";

export const TestimonialsCarousel = () => (
    <div className="card">
      <ReactCarousel
        className="react-carousel"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
      >
        {dataTestimonials.map((slide) => (
          <div key={slide.id} className="react-carousel-slide">
            <div className="image-wrapper">
              <img className="testimonial-image" src={slide.image} />
            </div>
            <p className="testimonial-name">{slide.name}</p>
            <p className="testimonial-text">{slide.text}</p>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
