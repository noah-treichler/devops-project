import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Baylor GPA Tracker</h1>
      <p>
        This website allows you to explore historical GPA trends for courses and professors at Baylor University.
        Use the links below to get started:
      </p>
      <div className="links">
        <Link to="/courses" className="link-button">
          View Course List
        </Link>
        <Link to="/professors" className="link-button">
          View Professor GPA
        </Link>
      </div>
    </div>
  );
};

export default HomePage;