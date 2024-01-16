import React from "react";
import { dataMediCare } from "./dataMediCare";
import "../App.css";


function MediCare() {
    return(
        <section className="mediCare">
            <div className="column">
                <h2 className="heading">Medical Care Away from Home</h2>
                <p className="text">Moving to a new country can often make it difficult to obtain fast and high-quality medical care. Sometimes, you may need to ask a question and quickly receive an answer or advice, especially when it comes to childhood illnesses.</p>
            </div>
            <div className="row">
                {dataMediCare.map((point) => {
                    const {id, icon, text} = point;
                    return(
                        <div key={id} className="column point">
                            <p className="point-icon">{icon}</p>
                            <p className="questions">{text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MediCare;