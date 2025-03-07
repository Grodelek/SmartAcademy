import React, { useState } from "react";
import {useNavigate} from "react-router";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorText = await response.text(); // Pobierz treść błędu
                throw new Error(`Błąd ${response.status}: ${errorText}`);
            }

            const token = await response.text();

            if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("username", username);
                navigate("/");
            } else {
                throw new Error("Brak tokena w odpowiedzi serwera");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="centered content center">
            <div className="flex justify-center items-center m-8">
            <span className="text-blue-500 font-bold md:text-4xl">
                Please, log in
            </span>
            </div>
            <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                            Username
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {error && <p className="text-red-500 text-xs italic text-center">{error}</p>}
                <a href={"/register"} className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 hover:text-white-500">No account? Register here</a>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-blue-500 w-1/2 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded"
                            type="button"
                            onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
