import { Link } from "react-router-dom";
import { ValidationError, useForm } from '@formspree/react';
import "../App.css";
import icon from '../assets/appointment-icon.png';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Form() {
  const [state, handleSubmit] = useForm("xayrynde");
  if (state.succeeded) {
    return <div className="column form-feedback">
        <img src={icon} alt="appointment" />
        <p className="form-response">Thank you for your Appointment!</p>
        <p className="form-response">We will give you our feedback soon!</p>
        </div>;
  }
  return (
    <section className="form column">
        <h1 className="heading">Schedule the Appointment</h1>
        <form method="POST" onSubmit={handleSubmit}>
      <div className="form-block">
      <label htmlFor="name">Name</label>
      <input className="input" placeholder="Your first and last name" id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="form-block">
      <label htmlFor="phone">Your Phone</label>
      <input className="input"  placeholder="Your phone number" id="phone" type="tel" name="phone" required />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div className="form-block">
      <label htmlFor="email">Email</label>
      <input className="input" placeholder="Your e-mail address" id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-block">
      <label htmlFor="doctor">Doctor</label>
      <input className="input" placeholder="Enter specialty of the doctor" id="doctor" type="text" name="doctor" required />
      <ValidationError prefix="Doctor" field="doctor" errors={state.errors} />
      </div>

      <div className="form-block">
      <label htmlFor="country">Your Country</label>
      <input className="input" placeholder="Your current country" id="country" type="text" name="country" required />
      <ValidationError prefix="Country" field="country" errors={state.errors} />
      </div>

      <div className="form-block">
      <label htmlFor="message">Issue</label>
      <textarea className="input textarea" placeholder="Describe the problem in detail" id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div>
      <Checkbox {...label} color="success" /> <span className="private-policy">I agree that Web Doctor LLC will process my personal data in accordance with the <Link to="/privacy"><span className="privacy-link">Privacy Policy</span></Link>, I agree with the Privacy Policy and I give my consent to communicate with me.</span> <br />
        <p className="private-policy">Your consent is voluntary and you are free to withdraw it at any time. More information is available in our <Link to="/privacy"><span className="privacy-link">Privacy Policy</span></Link>.</p>
      </div>
        <button className="form-btn" type="submit" disabled={state.submitting}>Send</button>
        <p className="private-policy">Attention! Our service is not a substitute for emergency medical care or face-to-face medical appointments and is not affiliated with any clinic or insurance company. We provide an opportunity to communicate with a specialist, taking into account all the restrictions due to the specifics of online communication.</p>
    </form>
    </section>
  )
}

export default Form;