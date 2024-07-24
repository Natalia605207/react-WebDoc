import { Link } from "react-router-dom";

function DoctorsInfo({doctors}) {
    return(
        <div className="row">
            {doctors.map((element => {
                const {id, image, name, profession, experience, consults} = element;
                return(
                    <div key={id} className="column point">
                        <Link to={`/doctors/${element.title}`}>
                        <img className="doctor-image" src={image} alt="doctor" />
                        </Link>
                        <p className="doctor-name">{name}</p>
                        <p className="profession">{profession}</p>
                        <p className="privacy-passage margin">{experience} years of experience</p>
                        <p className="privacy-passage margin">{consults} consults done</p>
                        <Link to={`/doctors/${element.title}`}>
                        <button className="form-btn">Learn More</button>
                        </Link>
                    </div>
                )
            }))}
        </div>
    )
}

export default DoctorsInfo;