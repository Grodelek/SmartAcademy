import React, { useEffect, useState } from 'react';
import axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={"centered"}>
            <h1>Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default StudentList;