import React, { useEffect, useState } from 'react';
import NavbarComponent from '../NavbarComponent';
import axios from "axios";
import { useNavigate } from "react-router";

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
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <button
                    className="shadow bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mb-6 w-full rounded"
                    type="button"
                    onClick={() => navigate("/students/add")}
                >
                    Add Student
                </button>

                <h1 className="text-2xl font-bold text-gray-800 mb-4">Students</h1>

                {loading ? (
                    <p className="text-gray-600">Loading students...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : students.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2 text-left">Name</th>
                                <th className="border px-4 py-2 text-left">Surname</th>
                                <th className="border px-4 py-2 text-left">Index</th>
                                <th className="border px-4 py-2 text-left"></th>
                                <th className="border px-4 py-2 text-left"></th>

                            </tr>
                            </thead>
                            <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-100">
                                    <td className="border px-4 py-2">{student.name}</td>
                                    <td className="border px-4 py-2">{student.surname}</td>
                                    <td className="border px-4 py-2">{student.index}</td>
                                    <td className="button px-4 py-2 ">
                                        <button
                                            className="shadow bg-green-500 hover:bg-green-400 text-white font-bold mt-5 py-2 px-4  w-full rounded"
                                            type="button"
                                            onClick={() => navigate(`/students/update/${student.id}`)}
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td className="button px-4 py-2 ">
                                        <button
                                            className="shadow bg-red-500 hover:bg-red-400 text-white font-bold mt-5 py-2 px-4  w-full rounded"
                                            type="button"
                                            onClick={() => navigate(`/students/delete/${student.id}`)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-600">No students available.</p>
                )}
            </div>
        </>
    );
};

export default StudentList;
