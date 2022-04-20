import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../components/AuthContext/AuthContext";
import axios from "axios";

function Profile() {
    const {user} = useContext(AuthContext);
    const [privateContent, setPrivateContent] = useState('');

    useEffect(() => {
        async function fetchPrivateContent() {
            const token = localStorage.getItem("token");
            try {
                const result = await axios.get(`http://localhost:3000/660/private-content`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
                setPrivateContent(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPrivateContent();
    }, []);
    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </section>
            <section>
                <h2>{privateContent.title}</h2>
                <p>{privateContent.content}</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;