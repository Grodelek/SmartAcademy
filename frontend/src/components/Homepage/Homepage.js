import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Błąd podczas pobierania danych:', error);
                setError('Nie udało się pobrać danych z serwera.');
            });
    }, []);

    return (
        <navbar>
            <div className={"navbar"}>
                <div className={"burger-menu"}>
                    <div className={"burger-bar"}></div>
                    <div className={"burger-bar"}></div>
                    <div className={"burger-bar"}></div>
                </div>
                <div className={"navbar-right"}>
                    <a href={"/students"} className={"navbar-item"}>Students</a>
                    <span className={"navbar-item"}>Register</span>
                    <span className={"navbar-item"}>Login</span>
                </div>

            </div>
        </navbar>
    );
};

export default Homepage;
