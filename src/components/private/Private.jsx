import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authcontextdata/AuthContextData";


const Private = ({ children }) => {

    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/"></Navigate>
};

export default Private;