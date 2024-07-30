// src/components/UserPage.jsx
import React, { useEffect, useState } from 'react';
import { FaBook, FaBullhorn, FaCalendarAlt, FaCalendarCheck, FaChartLine, FaClipboardList, FaComments, FaEnvelope, FaHistory, FaTasks, FaUser, FaUserCheck, FaVideo } from 'react-icons/fa';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Headers from '../components/Headers'; // Import Header component
import '../styles/userpages.css';

const UserPage = () => {
  const { user } = useAuth(); // Mengambil user dari context
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    document.title = user.role === 'guru' ? "Teacher Dashboard - SMAN 22 Bekasi" : "Student Dashboard - SMAN 22 Bekasi"; // Mengatur title sesuai role
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update setiap detik

    return () => clearInterval(intervalId); // Clean up interval saat komponen unmount
  }, [user.role]);

  const formatDateTime = (date) => {
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDateTime(currentDateTime);

  if (!user) {
    // Redirect ke halaman login jika user belum ada
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      <Headers role={user.role} title={user.role === 'guru' ? "Teacher Dashboard" : "Student Dashboard"} context="dashboard"  /> {/* Pass the dynamic title here */}
      <main className="dashboard-content">
        {/* Konten dashboard berdasarkan peran */}
        {user.role === 'guru' && (
          <>
            <div className="dashboard-header-info">
              <h2>Dashboard</h2>
              <div className="date-time">
                <div className="date">{formattedDate}</div>
                <div className="time">{formattedTime}</div>
              </div>
            </div>
            <section id="teacher" className="dashboard-section">
              <NavLink to="/manage-classes" className="dashboard-card">
                <FaTasks className="dashboard-card-icon" />
                <h3>Manage Classes</h3>
                <p>Organize and manage your classes efficiently.</p>
              </NavLink>
              <NavLink to="/manage-attendence" className="dashboard-card">
                <FaUserCheck className="dashboard-card-icon" />
                  <h3>Attendance</h3>
                  <p>Quickly record and manage student attendance. Check absences, view histories, and generate reports to track student participation.</p>
              </NavLink>
              <NavLink to="/Assigments" className="dashboard-card">
                <FaClipboardList className="dashboard-card-icon" />
                <h3>Assignments</h3>
                <p>Create and grade assignments.</p>
              </NavLink>
              <NavLink to="/student-progress" className="dashboard-card">
                <FaChartLine className="dashboard-card-icon" />
                <h3>Student Progress</h3>
                <p>Monitor student progress and performance.</p>
              </NavLink>
              <NavLink to="/class-announcements" className="dashboard-card">
                <FaBullhorn className="dashboard-card-icon" />
                <h3>Class Announcements</h3>
                <p>Create and manage class announcements.</p>
              </NavLink>
              <NavLink to="/discussion-forum" className="dashboard-card">
                <FaComments className="dashboard-card-icon" />
                <h3>Discussion Forum</h3>
                <p>Participate in class discussions and Q&A.</p>
              </NavLink>
              <NavLink to="/calendar" className="dashboard-card">
                <FaCalendarAlt className="dashboard-card-icon" />
                <h3>Calendar</h3>
                <p>View class schedule and important dates.</p>
              </NavLink>
              <NavLink to="/digital-library" className="dashboard-card">
                <FaBook className="dashboard-card-icon" />
                <h3>Digital Library</h3>
                <p>Access textbooks and educational resources.</p>
              </NavLink>
              <NavLink to="/video-conference" className="dashboard-card">
                <FaVideo className="dashboard-card-icon" />
                <h3>Video Conference</h3>
                <p>Conduct online classes via video conference.</p>
              </NavLink>
              <NavLink to="/history" className="dashboard-card">
                <FaHistory className="dashboard-card-icon" />
                <h3>History</h3>
                <p>Review your past activities and records.</p>
              </NavLink>
            </section>
          </>
        )}
        {user.role === 'siswa' && (
          <>
            <div className="dashboard-header-info">
              <h2>Dashboard</h2>
              <div className="date-time">
                <div className="date">{formattedDate}</div>
                <div className="time">{formattedTime}</div>
              </div>
            </div>
            <section id="student" className="dashboard-section">
              <NavLink to="/Assigments" className="dashboard-card">
                <FaClipboardList className="dashboard-card-icon" />
                <h3>View Assignments</h3>
                <p>Check your assignments and due dates.</p>
              </NavLink>
              <NavLink to="/grades" className="dashboard-card">
                <FaChartLine className="dashboard-card-icon" />
                <h3>Grades</h3>
                <p>View your grades and feedback.</p>
              </NavLink>
              <NavLink to="/upcoming-events" className="dashboard-card">
                <FaCalendarAlt className="dashboard-card-icon" />
                <h3>Upcoming Events</h3>
                <p>Stay updated with upcoming school events.</p>
              </NavLink>
              <NavLink to="/manage-attendence" className="dashboard-card">
                <FaCalendarCheck className="dashboard-card-icon" />
                <h3>Attendance</h3>
                <p>View your attendance records and track your presence.</p>
              </NavLink>
              <NavLink to="/messages" className="dashboard-card">
                <FaEnvelope className="dashboard-card-icon" />
                <h3>Messages</h3>
                <p>Check messages from teachers and school staff.</p>
              </NavLink>
              <NavLink to="/profile" className="dashboard-card">
                <FaUser className="dashboard-card-icon" />
                <h3>Profile</h3>
                <p>Update your personal information and settings.</p>
              </NavLink>
              <NavLink to="/library" className="dashboard-card">
                <FaBook className="dashboard-card-icon" />
                <h3>Library</h3>
                <p>Access educational resources and digital textbooks.</p>
              </NavLink>
              <NavLink to="/history" className="dashboard-card">
                <FaHistory className="dashboard-card-icon" />
                <h3>History</h3>
                <p>Review your past activities and records.</p>
              </NavLink>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default UserPage;