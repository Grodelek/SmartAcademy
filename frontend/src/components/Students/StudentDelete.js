import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const StudentDelete = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        axios.delete(`http://localhost:8080/api/students/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                navigate("/students");
            })
            .catch((error) => {
                if (error.response?.status === 401) {
                    localStorage.removeItem("token");
                    navigate("/login");
                } else {
                    setError("Failed to delete student");
                }
            });
    }, [id, navigate]);
    return (
        <div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default StudentDelete;
