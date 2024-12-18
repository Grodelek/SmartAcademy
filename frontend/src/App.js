import './App.css';
import StudentList from "./components/Students/StudentList";
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from "./pages/Home";
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/students" element={<StudentList/>}/>
              <Route path="/" element={<Home/>}/>

          </Routes>
      </Router>
  );
}

export default App;
