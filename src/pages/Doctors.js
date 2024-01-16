import { useState } from "react";
import { dataDoctors } from "../components/DoctorsInfo/dataDoctors";
import Buttons from "../components/DoctorsInfo/Buttons";
import DoctorsInfo from "../components/DoctorsInfo/DoctorsInfo";
import Footer from "../components/Footer";

function Doctors() {

    const [doctors, setDoctors] = useState(dataDoctors);

    const filterDoctors = (searchTerm) => {
        const chosenDoctors = dataDoctors.filter(doctor => doctor.searchTerm === searchTerm);
        setDoctors(chosenDoctors);
    }

    return (
        <div className="our-doctors">
        <div className="top-photo doctors-photo">
            <h2 className="top-heading">Our Doctors</h2>
        </div>
        <div className="doctors">
        <Buttons filterDoctors={filterDoctors}/>
        <DoctorsInfo doctors={doctors} />
        </div>
        <Footer />
        </div>
    )
}

export default Doctors;