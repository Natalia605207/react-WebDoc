import React from "react";
import { dataGeneralInfo } from "./dataGeneralInfo";
import "../App.css";

function GeneralInfo() {
    return(
        <section className="mediCare">
            <div className="column">
                <h1 className="heading help">We Are Here to Help You!</h1>
                <p className="text">Our doctors, who are leading experts in their respective fields, are available to consult with you remotely.</p>
                <p className="text">Submit a request now! Our coordinator will contact you and match you with a suitable doctor for your consultation.</p>
                <p className="text"><span className="bold">The price for a consultation</span> starts at <span className="bold">$100</span> and may vary depending on the individual doctor. Your personal consultation fee will be provided to you.</p>
                <p className="text">Also, we can help with:</p>
            </div>
            <div className="row padding">
                {dataGeneralInfo.map((point) => {
                    const {id, icon, text} = point;
                    return(
                        <div key={id} className="column general">
                            <p className="general-icon">{icon}</p>
                            <p className="questions">{text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default GeneralInfo;