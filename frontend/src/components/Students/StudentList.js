import React, { useEffect, useState } from 'react';
import NavbarComponent from '../NavbarComponent';
import axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <nav>
                <NavbarComponent />
            </nav>
            <div className="centered">
                <h1>Students</h1>
                {students.length > 0 ? (
                    <ul>
                        {students.map(student => (
                            <li key={student.id}>
                                {student.name} - {student.surname} - {student.index} - {student.age}
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
