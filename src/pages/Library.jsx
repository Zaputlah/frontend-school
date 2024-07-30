import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/library.css';

const Library = () => {
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
      <Headers role={user.role} title="Library" context="library" />
      <div className="class-cards-container">
        <section id="library" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaBook className="dashboard-card-icon" />
            <h3>View Library</h3>
            <p>Access digital resources and materials.</p>
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

export default Library;
