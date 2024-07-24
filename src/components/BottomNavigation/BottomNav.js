import { Link } from 'react-router-dom';
import "./BottomNav.css";
import { MdHome } from "react-icons/md";
import { MdDiversity1 } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";
import { MdLocalHospital } from "react-icons/md";
import Login from '../Auth0/Login';
import { useAuth0 } from "@auth0/auth0-react";

export const BottomNav = () => {
    const { isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
        <div className="bottom-nav">
            <Link to="/" className="bottomNav-link">
            <div className="bottom-column">
                <MdHome className="bottomNav-icon" />
                <p className="bottomNav-linkName">Home</p>
            </div>
            </Link>
            <Link to="/doctors" className="bottomNav-link">
            <div className="bottom-column">
                <MdDiversity1 className="bottomNav-icon" />
                <p className="bottomNav-linkName">Doctors</p>
            </div>
            </Link>
            <Link to="/faqs" className="bottomNav-link">
            <div className="bottom-column">
                <MdHelpCenter className="bottomNav-icon" />
                <p className="bottomNav-linkName">FAQs</p>
            </div>
            </Link>
            <Link to="/about" className="bottomNav-link">
            <div className="bottom-column">
                <MdLocalHospital className="bottomNav-icon" />
                <p className="bottomNav-linkName">About</p>
            </div>
            </Link>
            <div className="bottom-column">
            <Login />
            <p className="bottomNav-linkName">Log in</p>
            </div>
        </div>
    )
)}