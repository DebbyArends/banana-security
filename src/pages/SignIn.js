import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../components/AuthContext/AuthContext";
import {useForm} from "react-hook-form";

function SignIn() {
    const {login} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();

    function onFormSubmit() {
        login();
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
                        {...register("email-address")}
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