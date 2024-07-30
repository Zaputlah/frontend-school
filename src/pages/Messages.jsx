import React, { useState } from 'react';
import { FaEnvelope, FaPlusCircle } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/messages.css';

const Messages = () => {
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
      <Headers role={user.role} title="Messages" context="messages" />
      <div className="class-cards-container">
        <section id="messages" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaEnvelope className="dashboard-card-icon" />
            <h3>View Messages</h3>
            <p>Read messages from teachers and classmates.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaPlusCircle className="dashboard-card-icon" />
            <h3>New Message</h3>
            <p>Send a new message.</p>
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

export default Messages;
