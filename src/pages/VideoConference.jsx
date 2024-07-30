import React, { useState } from 'react';
import { FaPlusCircle, FaVideo } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/videoConference.css';

const VideoConference = () => {
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

  if (user.role !== 'guru') {
    return null;
  }

  return (
    <div className="dashboard-container">
      <Headers role={user.role} title="Video Conference" context="video-conference" />
      <div className="class-cards-container">
        <section id="video-conference" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaVideo className="dashboard-card-icon" />
            <h3>Join Conference</h3>
            <p>Join an ongoing video conference.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaPlusCircle className="dashboard-card-icon" />
            <h3>Schedule Conference</h3>
            <p>Schedule a new video conference.</p>
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

export default VideoConference;
