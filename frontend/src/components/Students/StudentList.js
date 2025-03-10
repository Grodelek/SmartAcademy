import React, { useEffect, useState } from 'react';
import NavbarComponent from '../NavbarComponent';
import axios from "axios";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        axios.get('http://localhost:8080/api/students/all', {
            headers: {
                Authorization: `Bearer ${token}`,
            }

        })
            .then(response => {
                setStudents(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                if (error.response?.status === 401) {
                    localStorage.removeItem("token");
                    navigate("/login");
                } else {
                    setError('Failed to fetch student data');
                }
            });
    }, [navigate]);

    return (
        <>
            <nav>
                <NavbarComponent />
            </nav>
            <div className="centered">
                <button
                    className="shadow bg-blue-500 w-1/4 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-5 rounded"
                    type="button"
                    onClick={ () => navigate("/students/add")}>
                    Add Student
            </button>
                <h1>Students</h1>
                {loading ? (
                    <p>Loading students...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : students.length > 0 ? (
                    <ul>
                        {students.map((student) => (
                            <li key={student.id}>
                                <p className="text-lg font-semibold text-gray-700">
                                    {student.name} {student.surname} ({student.index})
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No students available.</p>
                )}
            </div>
        </>
    );
};

export default StudentList;
