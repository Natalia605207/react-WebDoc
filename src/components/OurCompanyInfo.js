import "../App.css";
import imageOne from "../assets/about-one.jpg";
import imageTwo from "../assets/about-two.jpg";
import imageThree from "../assets/about-three.jpg";
import imageFour from "../assets/about-four.jpg";

function OurCompanyInfo() {
    return(
        <div className="about-information">
            <div className="line">
                <div>
                    <h3 className="about-heading">Who We Are?</h3>   
                    <p className="privacy-passage">WebDoc is a medical online platform where users can get medical advice from doctors. Our virtual online medical help service provides the ultimate convenience and best health care. We are proud to be in the Telemedicine industry. Our doctor panel consists of medical practitioners, physicians and therapists from US, UK, UAE, India, Singapore, Germany, Russia and counting... WebDoc sticks to the highest standards when approving doctors to practice in the online doctor consultation service. We are adding new doctors very often. We verify our online doctors to ensure they are fully licensed so that the care we provide will always be of the highest quality.</p>          
                </div>
                <img className="about-photo" src={imageOne} alt="aboutUs" />
            </div>
            <div className="line reverse">
                <img className="about-photo" src={imageTwo} alt="aboutUs" />
                <div>
                    <h3 className="about-heading">What We Do?</h3>   
                    <p className="privacy-passage">We provide various channels to contact our doctors such as posting as a health query or booking a slot for real time face-to-face consultation over HD video and phone (it will be a private/secure call back). One can use our service to consult with highly qualified physicians at the comfort of your home. When a doctor provides a quick medical advice online, he/she will be helping a patient who may otherwise have had to visit the emergency room. Our goal is to provide the highest level of online healthcare and to offer a unique service where any patient can receive consultation with any doctors irrespective of their geographical location. Our team strives to provide the best services in online healthcare.</p>          
                </div>
            </div>
            <div className="line">
                <div>
                    <h3 className="about-heading">Our Aim</h3>   
                    <p className="privacy-passage">WebDoc's aim is to gain recognition from its users as a medical second opinion platform and to keep working tirelessly to save it. We want to be sure that all our users are rightly informed about their potential health issues and that the doctors team at WebDoc helps the users with their health problems. We aim at connecting patients from all over the world with doctors whenever necessary with a click of the button.</p>          
                </div>
                <img className="about-photo" src={imageThree} alt="aboutUs" />
            </div>
            <div className="line reverse">
                <img className="about-photo" src={imageFour} alt="aboutUs" />
                <div>
                    <h3 className="about-heading">Our Mission</h3>   
                    <p className="privacy-passage">WebDoc's mission is to create a platform that is easily accessible and trustworthy for both Doctors and Patients. We believe in constantly evolving and creating different services that will be suitable for any user based on his requirements. We aim at making WebDoc the best at both the quality of the service provided and the time of delivery of the service. We want to build a highly-performed, simple-to-use platform.</p>          
                </div>
            </div>
        </div>
    )
}

export default OurCompanyInfo;