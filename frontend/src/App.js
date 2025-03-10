import './App.css';
import StudentList from "./components/Students/StudentList";
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router';
import Home from "./pages/Home";
import Login from "./components/Login/Login"
import {AuthContext, AuthProvider} from "./components/Login/AuthContext";
import {useContext, useEffect} from "react";
import Register from "./components/Login/Register";
import StudentRegisterForm from "./components/Students/StudentRegisterForm";

function App() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/students" element={<StudentList/>}/>
              <Route path="/students/add" element={<StudentRegisterForm/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </Router>
  );
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
