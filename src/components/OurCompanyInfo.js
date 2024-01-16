import "../App.css";

function OurCompanyInfo() {
    return(
        <div className="about-information">
            <div className="line">
                <div>
                    <h3 className="about-heading">Who We Are?</h3>   
                    <p className="privacy-passage">WebDoc is a medical online platform where users can get medical advice from doctors. Our virtual online medical help service provides the ultimate convenience and best health care. We are proud to be in the Telemedicine industry. Our doctor panel consists of medical practitioners, physicians and therapists from US, UK, UAE, India, Singapore, Germany, Russia and counting... WebDoc sticks to the highest standards when approving doctors to practice in the online doctor consultation service. We are adding new doctors very often. We verify our online doctors to ensure they are fully licensed so that the care we provide will always be of the highest quality.</p>          
                </div>
                <img className="about-photo" src={"https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-stethoscope_23-2149611228.jpg?w=1060&t=st=1704494749~exp=1704495349~hmac=007c88f46520308999111ba877626b9a704fffd3de3033e6429690f68e9b288c"} alt="aboutUs" />
            </div>
            <div className="line reverse">
                <img className="about-photo" src={"https://img.freepik.com/free-photo/medical-teleconsultation-sick-patient-home_23-2149329047.jpg?size=626&ext=jpg&uid=R86882888&ga=GA1.1.748415115.1670098303&semt=ais"} alt="aboutUs" />
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
                <img className="about-photo" src={"https://img.freepik.com/free-photo/group-doctors-with-heart-symbol_329181-19665.jpg?w=1060&t=st=1704495382~exp=1704495982~hmac=b396a5c2728626c1953d6f42fe1eead9fd1bf935cfa7b1e59ea4eda9803425e6"} alt="aboutUs" />
            </div>
            <div className="line reverse">
                <img className="about-photo" src={"https://img.freepik.com/free-photo/doctor-showing-phone-smiling_171337-15595.jpg?w=1060&t=st=1704496527~exp=1704497127~hmac=c1ed56099c26aaf9763a6bfde299c775fb7e7bc8515c4c2ec6a2d064eb5d4961"} alt="aboutUs" />
                <div>
                    <h3 className="about-heading">Our Mission</h3>   
                    <p className="privacy-passage">WebDoc's mission is to create a platform that is easily accessible and trustworthy for both Doctors and Patients. We believe in constantly evolving and creating different services that will be suitable for any user based on his requirements. We aim at making WebDoc the best at both the quality of the service provided and the time of delivery of the service. We want to build a highly-performed, simple-to-use platform.</p>          
                </div>
            </div>
        </div>
    )
}

export default OurCompanyInfo;