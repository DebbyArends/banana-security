import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";

function SignUp() {
    const { register,handleSubmit} = useForm()

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={handleSubmit}>
          <label htmlFor="email-address">
              Emailadres
              <input
                  type="email"
                  id="email-address"
                  {...register("email-address")}
              />
          </label>
          <label htmlFor="username">
              Gebruikersnaam
              <input
                  type="text"
                  id="username"
                  {...register("username")}
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
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;