import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import { FaLaptopMedical } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import Login from "../Auth0/Login";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <nav className="NavbarItems sticky">
            <div>
                <Link to="/" className="navbar-logo">
                <FaLaptopMedical className="logo"/>
                <p className="company-name">WebDoc</p>
                </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <HiOutlineX className="bar" /> : <HiOutlineMenuAlt3 className="bar" />}
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-list">
                        <li className='nav-item'>
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/doctors" className="nav-link" onClick={closeMobileMenu}>Our Doctors</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/faqs" className="nav-link" onClick={closeMobileMenu}>FAQs</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>Our Company</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#contacts" className="nav-link" onClick={closeMobileMenu}>Contacts</Link>
                        </li>
                </ul>
                <div className="nav-buttons">
                <Login />
                <button className="consultation-btn">
                    <Link to="/#form-page" className="form-link" onClick={closeMobileMenu}>Make an Appointment</Link>
                </button>
                </div>
            </div>
        </nav>
    )
)}

export default Navbar;
