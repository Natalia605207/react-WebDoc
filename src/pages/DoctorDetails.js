import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { dataDoctors } from "../components/DoctorsInfo/dataDoctors";
import "../App.css";
import { FaUserMd } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { Fade } from "react-awesome-reveal";

function DoctorDetails() {
    const navigate = useNavigate();
    const { title } = useParams();

    const { isAuthenticated } = useAuth0();

    const [showText, setShowText] = useState(false);
    
    const showTextClick = (elem) => {
        elem.showMore = !elem.showMore;
        setShowText(!showText);
    }
    return (
        !isAuthenticated && (
        <div>
            {dataDoctors.filter(element => element.title === title).map((elem) => {
                const {id, image, name, profession, experience, consults, education, treatments, showMore} = elem;
                return(
                    <Fade direction="left" duration="1500" triggerOnce={true}>
                    <div key={id}>
                    <div className="line about-doctor">
                        <img className="about-photo" src={image} alt="doctor" />
                        <div>
                            <div>
                            <h3 className="about-heading">{name}</h3>
                            <p className="doctor-name">{profession}</p>
                            <br/>
                            <p className="privacy-passage"><FaUserMd className="aboutDoctor-icon"/> <span className="bold">{experience}</span> years of experience</p>
                            <p className="privacy-passage"><FaCommentMedical className="aboutDoctor-icon" /> <span className="bold">{consults}</span> consults done</p>
                            <p className="privacy-passage"><FaUserGraduate className="aboutDoctor-icon" /> <span className="bold">Education:</span> {education}</p>
                            <br/>
                            <p className="privacy-passage"><FaStethoscope className="aboutDoctor-icon" /> <span className="doctor-name">Areas of expertise: </span> 
                            {showMore ? treatments : treatments.substring(0, 110) +"..."}
                            <button className="showMoreBtn" onClick = {() => showTextClick(elem)}>{showMore ? "Show less" : "Show more"}</button>
                            </p>
                            </div>
                            <br/>
                            <div>
                            <button className="form-btn" onClick={() => navigate(-1)}>
                            Go Back
                            </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </Fade>
                )
            })}
        <Form />
        <Footer />
        <ScrollToTopBtn />
    </div>
    )
)}

export default DoctorDetails;