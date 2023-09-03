import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Navbar2, Navbar } from "./Components/Navbar";
import SignUp from "./Pages/SignUp";
import Internships from "./Pages/Internships";
import Courses from "./Pages/Courses";
import Details from "./Pages/Details";
import Apply from "./Pages/Apply";
import Preferences from "./Pages/Preferences";
import Resume from "./Pages/Resume";
import BookMarks from "./Pages/BookMarks";
import AdminBookMarks from "./Pages/AdminBookMarks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>}/>
          <Route path="/Home" element={<><Navbar /><Home /></>}/>
          <Route path="/SignUp" element={<><Navbar2 /><SignUp /></>}/>
          <Route path="/Internship" element={<><Navbar /><Internships /></>}/>
          <Route path="/Courses" element={<><Navbar /><Courses /></>}/>
          <Route path="/Internship/Details/:id" element={<><Navbar /><Details /></>}/>
          <Route path="/Internship/Details/:id/Apply" element={<><Navbar /><Apply /></>}/>
          <Route path="/Internship/Details/:id/Apply/Preferences" element={<><Navbar /><Preferences /></>}/>
          <Route path="/Internship/Details/:id/Apply/Preferences/Resume" element={<><Navbar /><Resume /></>}/>
          <Route path="/Internship/Details/:id/Apply/Preferences/Resume/BookMarks" element={<><Navbar /><BookMarks /></>}/>
          <Route path="/AdminBookMarks" element={<><Navbar /><AdminBookMarks /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
