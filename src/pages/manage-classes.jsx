import React, { useState } from 'react';
import { FaChartLine, FaClipboardList, FaTasks, FaUserCheck } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
import '../styles/manageClasses.css';

const ManageClasses = () => {
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
      <Headers role={user.role} title="Manage Classes" context="manage-classes" />
      <div className="class-cards-container">
        <section id="history" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaTasks className="dashboard-card-icon" />
            <h3>Create Class</h3>
            <p>Set up a new class and manage details.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaClipboardList className="dashboard-card-icon" />
            <h3>Class List</h3>
            <p>View and manage your classes.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaChartLine className="dashboard-card-icon" />
            <h3>Assignments</h3>
            <p>Create and manage assignments for your classes.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaUserCheck className="dashboard-card-icon" />
            <h3>Attendance</h3>
            <p>Record and track student attendance.</p>
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

export default ManageClasses;
