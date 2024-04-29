import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthContextData = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(false)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const providergoogle = new GoogleAuthProvider();
    const googlelogin = () => {
        return signInWithPopup(auth, providergoogle)
    }


    const providergit = new GithubAuthProvider();
    const gitlogin = () => {
        setLoader(true)
        return signInWithPopup(auth, providergit)
    }

    const name = "sami"


    const authinfo = { name, user, createUser, signIn, logOut, loader, setLoader, setUser, googlelogin, gitlogin, userData, setUserData}


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthContextData.propTypes = {
    children: PropTypes.node
}

export default AuthContextData;