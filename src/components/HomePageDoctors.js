import React from "react";
import "../App.css";
import { dataDoctors } from "./DoctorsInfo/dataDoctors";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function HomePageDoctors() {
    return(
        <section className="homeDoctors">
            <div className="column">
                <h1 className="heading">Meet Our Doctors</h1>
                <p className="text">Get a private consultation in more that 20 specialities</p>
            </div>
            <Zoom triggerOnce={true} duration="1500">
            <div className="row">
                {dataDoctors.slice(0,3).map((doctor) => {
                    const {id, image, name, profession, experience, consults} = doctor;
                    return(
                        <div key={id} className="column point">
                            <img className="doctor-image" src={image} alt="doctor" />
                            <p className="doctor-name">{name}</p>
                            <p className="profession">{profession}</p>
                            <p className="privacy-passage margin">{experience} years of experience</p>
                            <p className="privacy-passage margin">{consults} consults done</p>
                        </div>
                    )
                })}
            </div>
            </Zoom>
            <div className="center">
            <button className="form-btn">
                    <Link to="/doctors" className="doctors-link">View All Doctors</Link>
                </button>
            </div>
        </section>
    )
}

export default HomePageDoctors;