import React, { useState } from 'react';
import { FaClipboardCheck } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/grades.css';

const Grades = () => {
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

  if (user.role !== 'siswa') {
    return null;
  }

  return (
    <div className="dashboard-container">
      <Headers role={user.role} title="Grades" context="grades" />
      <div className="class-cards-container">
        <section id="grades" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaClipboardCheck className="dashboard-card-icon" />
            <h3>View Grades</h3>
            <p>Check your grades for all subjects.</p>
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

export default Grades;
