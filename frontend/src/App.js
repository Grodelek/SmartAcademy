import './App.css';
import StudentList from "./components/Students/StudentList";
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import Login from "./components/Login/Login"
import {AuthContext, AuthProvider} from "./components/Login/AuthContext";
import {useContext} from "react";
function App() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/students" element={<StudentList/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
  );
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
