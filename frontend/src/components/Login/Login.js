import React, { useState } from 'react';
import {useNavigate} from "react-router";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            });
            alert("Login successfully");
            navigate("/")
        } catch (err) {
            setError('Invalid username or password');
            console.error('Error logging in:', err);
        }
    };

    return (
        <div className="centered content center">
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
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;