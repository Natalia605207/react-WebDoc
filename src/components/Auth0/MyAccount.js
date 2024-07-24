import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
    const {user, isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <div className="column-end">
                <p className="profile">Name: {user.nickname}</p>
                <p className="profile">Email: {user.email}</p>
            </div>
        )
    )
}

export default MyAccount;