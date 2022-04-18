import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";

function SignUp() {
    const {register,handleSubmit} = useForm()
    const history = useHistory()


async function onFormSubmit(data) {
        try {
            await axios.post('http://localhost:3000/register',
                {
                    email: data.email,
                    password: data.password,
                    username: data.username,
                })
            history.push("/signin")
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