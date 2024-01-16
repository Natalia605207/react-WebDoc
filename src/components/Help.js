import { Link } from "react-router-dom";

function Help() {
    return(
        <div className="column need-help">
            <h1 className="heading">Need Help?</h1>
            <p className="text">Feel free to contact us 24/7 by our email</p>
            <p className="text"><a className="email" href="mailto:natalyaobukhova87@gmail.com">info@web.doctor</a></p>
            <br/>
            <Link to="/privacy">
                <span className="privacy-link">Privacy Policy</span>
            </Link>
        </div>
    )
}

export default Help;