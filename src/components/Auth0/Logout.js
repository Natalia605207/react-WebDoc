import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";
import MyAccount from "./MyAccount";
import { FiUserCheck } from "react-icons/fi";
import { FaLaptopMedical } from "react-icons/fa";
import "./Profile.css";

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return(
    isAuthenticated && (
    <section className="user-account">
        <div className="flex-space">
            <div className="flex-row">
            <FaLaptopMedical className="logo-account"/>
            <p className="companyName">WebDoc</p>
        </div>
        <div className="logout-button">
        <FiUserCheck onClick={() => logout()} className="logout-btn" />
    </div>
    </div>
    <MyAccount />
    <Secret />
    </section>
    ))
}

export default Logout;