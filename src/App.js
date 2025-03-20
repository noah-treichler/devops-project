import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CourseList from './pages/CourseList';
import ProfessorGPA from './pages/ProfessorGPA';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/professors" element={<ProfessorGPA />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;