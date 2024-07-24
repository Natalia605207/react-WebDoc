import { useAuth0 } from "@auth0/auth0-react";
import LabTabs from "./LabTabs";

const Secret = () => {
    const {user,isAuthenticated} = useAuth0();

    return(
    isAuthenticated && (
        <div className="column-center">
        <h3 className="welcome-phrase">Hello {user.nickname}</h3>
        <h2 className="account-heading">Welcome to your account</h2>
        <LabTabs />
        <div className="column-center bottom-fixed">
        <p className="profile">© 2021 Copyright: WebDoc.com</p>
        <p className="profile text-center">Designed and developed by Natalia Musikhina</p>
        </div>
        </div>
    ))
}

export default Secret;