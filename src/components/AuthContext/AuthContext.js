import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token){

            //is de token nog geldig? decodeer de token en check de exp key en vergelijk met new Date();
            const decoded = jwtDecode(token)
            console.log(decoded);

            getUserData(decoded.sub, decoded)
        } else {
            toggleIsAuth({
                ...isAuth,
                status: 'done',
            })
        }
    }, [])

    const history = useHistory()

    async function getUserData(id, token){
        try {
            const result = await axios.get(`http://localhost:3000/600/users/${id}`, {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            toggleIsAuth(
                {...isAuth,
                    isAuth: true,
                    user: {
                        id:result.data.id,
                        username: result.data.username,
                        email: result.data.email,
                    },
                    status: 'done',
                })
        }
        catch (e) {
            console.error(e)
            toggleIsAuth({
                ...isAuth,
                status: 'done',
            })
        }
    }

    function signIn(jwt) {
        const decoded = jwtDecode(jwt)
        getUserData(decoded.sub, jwt);
        localStorage.setItem("token", jwt);
        console.log('Gebruiker is ingelogd');
        history.push('/profile');
    }


    function signOut() {
        toggleIsAuth(
            {...isAuth,
            isAuth: false,
                user: null,
        })
        console.log('Gebruiker is uitgelogd');
        history.push('/');
        localStorage.clear()
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: signIn,
        logout: signOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children: <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;