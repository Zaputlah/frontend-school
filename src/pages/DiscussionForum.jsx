import React, { useState } from 'react';
import { FaComments, FaPlusCircle } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/discussionForum.css';

const DiscussionForum = () => {
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
      <Headers role={user.role} title="Discussion Forum" context="discussion-forum" />
      <div className="class-cards-container">
        <section id="forum" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaComments className="dashboard-card-icon" />
            <h3>View Discussions</h3>
            <p>Participate in and manage class discussions.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaPlusCircle className="dashboard-card-icon" />
            <h3>Create Discussion</h3>
            <p>Start a new discussion topic.</p>
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

export default DiscussionForum;
