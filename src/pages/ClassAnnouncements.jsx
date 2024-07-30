import React, { useState } from 'react';
import { FaBullhorn, FaPlusCircle } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/classAnnouncements.css';

const ClassAnnouncements = () => {
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
      <Headers role={user.role} title="Class Announcements" context="class-announcements" />
      <div className="class-cards-container">
        <section id="announcements" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaBullhorn className="dashboard-card-icon" />
            <h3>View Announcements</h3>
            <p>View all announcements made to the class.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaPlusCircle className="dashboard-card-icon" />
            <h3>Create Announcement</h3>
            <p>Create and post a new announcement.</p>
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

export default ClassAnnouncements;
