import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaLaptopMedical } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="NavbarItems sticky">
            <div>
                <Link to="/" className="navbar-logo">
                <FaLaptopMedical className="logo"/>
                <p className="company-name">WebDoc</p>
                </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <FaAlignRight className="bar" />
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
                            <Link to="/contacts" className="nav-link" onClick={closeMobileMenu}>Contacts</Link>
                        </li>
                </ul>
                <button className="consultation-btn">
                    <Link to="/form" className="form-link" onClick={closeMobileMenu}>Make an Appointment</Link>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
