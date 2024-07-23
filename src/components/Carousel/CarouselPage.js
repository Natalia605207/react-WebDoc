import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselPage.css";
import imgOne from "../../assets/ImageOne.jpg";
import imgTwo from "../../assets/ImageTwo.jpg";
import imgThree from "../../assets/ImageThree.jpg";
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import { HashLink as Link } from "react-router-hash-link";
import { Zoom } from "react-awesome-reveal";

function CarouselPage() {

  const consultationBtn = {
    backgroundColor: '#61bcba',
    padding: '7px 30px',
    border: 'none',
    borderRadius: '3px',
    color: '#ffffff',
    fontSize: '16px',
    margin: '15px 0px',
    fontFamily: `'Open Sans', sans-serif`,
    boxShadow: '0px 0px 10px #000000'
  }

  const handleAlert = () => {
    Swal.fire({
      title: "Want a discount?",
      text: "Bring a friend and get a 30% discount for one consultation!",
      icon: "info"
    });
  }

    return (
        <div>
        <Carousel className={`a.carousel-control-prev a.carousel-control-next`}>
        <Carousel.Item className='p-0'>
          <img
            className={`image`}
            src={imgOne}
            alt="First slide"
          />
          <Carousel.Caption className={`carousel-text`}>
            <Zoom triggerOnce={true} duration="1500">
            <h2 className={`font`}>Online consultations</h2>
            <p className={`font smaller`}>Fast, convenient and affordable</p>
            <Button style={consultationBtn}>
            <Link to="/#form-page" className="form-link">Get Help</Link>
            </Button>
            </Zoom>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='p-0'>
          <img
            className={`image`}
            src={imgTwo}
            alt="Second slide"
          />  
          <Carousel.Caption className={`carousel-text`}>
          <Zoom triggerOnce={true} duration="1500">
            <h2 className={`font`}>Best doctors</h2>
            <p className={`font smaller`}>Highly-qualified specialists</p>
            <Button style={consultationBtn}>
            <Link to="/#form-page" className="form-link">Get Help</Link>
            </Button>
            </Zoom>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='p-0'>
          <img
            className={`image`}
            src={imgThree}
            alt="Third slide"
          />   
        <Carousel.Caption className={`carousel-text`}>
        <Zoom triggerOnce={true} duration="1500">
            <h2 className={`font`}>Promotion!</h2>
            <p className={`font smaller`}>Get your 30% discount</p>
            <Button style={consultationBtn} onClick={handleAlert}>Learn More</Button>
        </Zoom>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default CarouselPage;