import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
// import '../styles/upcomingEvents.css';

const UpcomingEvents = () => {
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
      <Headers role={user.role} title="Upcoming Events" context="upcoming-events" />
      <div className="class-cards-container">
        <section id="events" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaCalendarAlt className="dashboard-card-icon" />
            <h3>View Events</h3>
            <p>Check upcoming school events.</p>
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

export default UpcomingEvents;
