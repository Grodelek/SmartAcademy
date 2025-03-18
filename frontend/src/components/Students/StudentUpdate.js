import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const StudentUpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate("/students");
      return;
    }

    fetch(`http://localhost:8080/api/students/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch student data.");
        }
        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setSurname(data.surname);
        setAge(data.age);
      })
      .catch((error) => {
        setError("Failed to fetch student data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!id) {
      setError("Student ID missing");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const updateData = { name, surname, age };
      if (password) updateData.password = password;

      const response = await fetch(`http://localhost:8080/api/students/update/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update student.");
      }

      navigate("/students");
    } catch (err) {
      console.error("Update error:", err);
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="centered content center">
      <div className="flex justify-center items-center m-8">
        <span className="text-blue-500 font-bold md:text-4xl">Update Student</span>
      </div>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Surname
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Age
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password (Optional)
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              className="shadow bg-green-500 w-1/2 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentUpdateForm;
