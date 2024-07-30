import React, { useState } from 'react';
import { FaChartLine, FaClipboardList, FaComments, FaPen, FaUserCheck } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers';
import '../styles/history.css'; // Pastikan untuk mengimpor file CSS Anda

const History = () => {
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
      <Headers role={user.role} title={user.role === 'guru' ? "Teacher History" : "Student History"} context="history" />
      {user.role === 'siswa' && (
        <section id="history" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaPen className="dashboard-card-icon" />
            <h3>Class Participation</h3>
            <p>Review your attendance and participation in classes.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaClipboardList className="dashboard-card-icon" />
            <h3>Assignment Submissions</h3>
            <p>Check the history of your assignment submissions and feedback.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaChartLine className="dashboard-card-icon" />
            <h3>Grades</h3>
            <p>View your past grades and feedback from teachers.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaUserCheck className="dashboard-card-icon" />
            <h3>Attendance</h3>
            <p>Track your attendance records over time.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaComments className="dashboard-card-icon" />
            <h3>Communication</h3>
            <p>Review your past communications with teachers.</p>
          </div>
        </section>
      )}
      {user.role === 'guru' && (
        <section id="history" className="dashboard-section">
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaPen className="dashboard-card-icon" />
            <h3>Class Sessions</h3>
            <p>Review past class sessions and topics covered.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaClipboardList className="dashboard-card-icon" />
            <h3>Assignment Creation</h3>
            <p>Track assignments you've created and their statuses.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaChartLine className="dashboard-card-icon" />
            <h3>Grades</h3>
            <p>View the history of grades given to students.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaUserCheck className="dashboard-card-icon" />
            <h3>Attendance Records</h3>
            <p>Monitor student attendance records over time.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaComments className="dashboard-card-icon" />
            <h3>Communication</h3>
            <p>Review communications with students and parents.</p>
          </div>
          <div className="dashboard-card" onClick={() => handleItemClick("COMING SOON")}>
            <FaChartLine className="dashboard-card-icon" />
            <h3>Professional Development</h3>
            <p>Track your professional development activities and training.</p>
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
  );
};

export default History;
