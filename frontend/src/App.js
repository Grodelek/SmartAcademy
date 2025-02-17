import './App.css';
import StudentList from "./components/Students/StudentList";
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from "./pages/Home";
import Login from "./components/Login/Login"
function App() {
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

export default App;
