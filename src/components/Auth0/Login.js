import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiUser } from "react-icons/fi";
import "../Navbar/Navbar.css"

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
    !isAuthenticated && (
        <FiUser onClick={() => loginWithRedirect()} className="login-btn" /> )
)}

export default Login;