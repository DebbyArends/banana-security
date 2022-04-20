import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../components/AuthContext/AuthContext";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();


    async function onFormSubmit(data) {
        try {
            const result = await axios.post('http://localhost:3000/login',
                {
                    email: data.email,
                    password: data.password,
                })
            login(result.data.accessToken)
        }
        catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="email-address">
                    Emailadres
                    <input
                        type="email"
                        id="email-address"
                        {...register("email")}
                    />
                </label>
                <label htmlFor="password">
                    Wachtwoord
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                    />
                </label>
                <button
                    type="submit"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;