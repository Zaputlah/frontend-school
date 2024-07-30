import React, { useState } from 'react';
import { FaChartLine, FaClipboardList, FaUserCheck } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/studentProgress.css';

const StudentProgress = () => {
  const { user } = useAuth();
  const [popupContent, setPopupContent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleItemClick = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  // Render null if the user is not a 'guru'
  if (user.role !== 'guru') {
    return null;
  }

  return (
    <div className="dashboard-container">
      <Headers role={user.role} title="Student Progress" context="student-progress" />
      <div className="class-cards-container">
        <section id="progress" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaChartLine className="dashboard-card-icon" />
            <h3>Overall Progress</h3>
            <p>Monitor and analyze the overall progress of students.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaUserCheck className="dashboard-card-icon" />
            <h3>Attendance</h3>
            <p>Track and review student attendance records.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaClipboardList className="dashboard-card-icon" />
            <h3>Grades</h3>
            <p>View and evaluate student grades and performance.</p>
          </div>
        </section>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <span className="close-button" onClick={handleClosePopup}>&times;</span>
              <p>{popupContent}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentProgress;
