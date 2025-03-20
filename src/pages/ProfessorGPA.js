import React, { useState, useEffect } from 'react';
import { dummyProfessors, dummyGpaTrends } from '../dummyData';
import GPAChart from '../components/GPAChart';
import '../App.css';

const ProfessorGPA = () => {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [gpaTrends, setGpaTrends] = useState([]);

  useEffect(() => {
    // TODO: Replace with backend API call
    setSelectedProfessor(null); // Reset selected professor when the page loads
  }, []);

  const handleProfessorSelect = (professorId) => {
    // TODO: Replace with backend API call
    const professor = dummyProfessors.find((prof) => prof.id === professorId);
    const trends = dummyGpaTrends.filter((trend) => professor.courses.includes(trend.courseId));
    setGpaTrends(trends);
    setSelectedProfessor(professorId);
  };

  return (
    <div>
      <h1>Professor GPA</h1>
      <ul>
        {dummyProfessors.map((professor) => (
          <li key={professor.id} onClick={() => handleProfessorSelect(professor.id)}>
            {professor.name}
          </li>
        ))}
      </ul>
      {selectedProfessor && (
        <div className="chart-container">
          <h2>GPA Trends</h2>
          {gpaTrends.map((trend) => (
            <div key={trend.courseId}>
              <h3>Course ID: {trend.courseId}</h3>
              <GPAChart data={trend.trends} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfessorGPA;