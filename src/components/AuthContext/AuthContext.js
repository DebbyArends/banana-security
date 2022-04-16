import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    function signIn() {
        toggleIsAuth(true);
        console.log('Gebruiker is ingelogd');
        history.push('/profile');
    }

    function signOut() {
        toggleIsAuth(false);
        console.log('Gebruiker is uitgelogd');
        history.push('/');
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: signIn,
        logout: signOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;