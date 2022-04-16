import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";

function SignUp() {
    const {register,handleSubmit} = useForm()


    async function onFormSubmit(data) {
        try {
            // await axios.post('http://localhost:3000/register'),
            //     {
            //     email: "klaas@novi.nl",
            //         password: "123456",
            //     username: "klaasie",
            //     }
        }
        catch (e) {
            console.error(e)
        }
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
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
          <label htmlFor="username">
              Gebruikersnaam
              <input
                  type="text"
                  id="username"
                  {...register("username")}
              />
          </label>
          <button
              type="submit"
          >
              Registreren
          </button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;