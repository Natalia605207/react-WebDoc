import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./Counter.css";

function Counter({ className, ...rest }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);
  
    return (
        <section className="counter">
          <div className="counter-row">
          <div className="counter-column">
              <strong data-number="400">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={8593}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                video consultations
              </span>
            </div>
            
            <div className="counter-column">
              <strong data-number="35">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={5652}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                happy clients
              </span>
            </div>
  
            <div className="counter-column">
              <strong data-number="120">
                <CountUp {...rest} start={viewPortEntered ? null : 0} end={980}>
                  {({ countUpRef }) => {
                    return (
                      <ReactVisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span className="number" ref={countUpRef} />
                      </ReactVisibilitySensor>
                    );
                  }}
                </CountUp>
              </strong>
              <span>
                  deciphered tests
              </span>
            </div>
          </div>
        </section>
    );
  }
  
  export default Counter;
