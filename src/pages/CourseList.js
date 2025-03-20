import React, { useState, useEffect } from 'react';
import { dummyCourses, dummyGpaTrends } from '../dummyData';
import GPAChart from '../components/GPAChart';
import '../App.css';

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [gpaTrends, setGpaTrends] = useState([]);

  useEffect(() => {
    // TODO: Replace with backend API call
    setSelectedCourse(null);
  }, []);

  const handleCourseSelect = (courseId) => {
    // TODO: Replace with backend API call
    const trends = dummyGpaTrends.find((trend) => trend.courseId === courseId)?.trends || [];
    setGpaTrends(trends);
    setSelectedCourse(courseId);
  };

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {dummyCourses.map((course) => (
          <li key={course.id} onClick={() => handleCourseSelect(course.id)}>
            {course.name} ({course.number})
          </li>
        ))}
      </ul>
      {selectedCourse && (
        <div className="chart-container">
          <h2>GPA Trends</h2>
          <GPAChart data={gpaTrends} />
        </div>
      )}
    </div>
  );
};

export default CourseList;