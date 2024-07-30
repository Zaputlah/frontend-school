import React, { useState } from 'react';
import { FaChartLine, FaClipboardList, FaPen, FaUserCheck } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/assignments.css';

const Assignments = () => {
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

  return (
    <div className="dashboard-container">
      <Headers role={user.role} title="Assignments" context="assignments" />
      <div className="class-cards-container">
        {user.role === 'guru' ? (
          <section id="assignments" className="dashboard-section">
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaPen className="dashboard-card-icon" />
              <h3>Create Assignment</h3>
              <p>Design new assignments for your classes.</p>
            </div>
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaClipboardList className="dashboard-card-icon" />
              <h3>Assignment List</h3>
              <p>View and manage assignments you've created.</p>
            </div>
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaChartLine className="dashboard-card-icon" />
              <h3>Grade Submissions</h3>
              <p>Grade and provide feedback on student submissions.</p>
            </div>
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaUserCheck className="dashboard-card-icon" />
              <h3>Assignment Stats</h3>
              <p>Track assignment completion and performance.</p>
            </div>
          </section>
        ) : (
          <section id="assignments" className="dashboard-section">
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaClipboardList className="dashboard-card-icon" />
              <h3>My Assignments</h3>
              <p>View and manage your assignments.</p>
            </div>
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaPen className="dashboard-card-icon" />
              <h3>Submit Assignment</h3>
              <p>Submit your completed assignments.</p>
            </div>
            <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
              <FaChartLine className="dashboard-card-icon" />
              <h3>Grades</h3>
              <p>View grades and feedback on your assignments.</p>
            </div>
          </section>
        )}

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

export default Assignments;
