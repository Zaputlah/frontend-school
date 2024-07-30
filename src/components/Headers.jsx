// src/components/Headers.jsx
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Pastikan ini diimport untuk gaya default
import { FaBook, FaBullhorn, FaCalendarAlt, FaChalkboardTeacher, FaChartLine, FaClipboardList, FaComments, FaHistory, FaSignOutAlt, FaTasks, FaUser, FaUserCheck, FaUserGraduate, FaVideo } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Headers = ({ role, title, context }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    confirmAlert({
      title: 'Konfirmasi Logout',
      message: 'Apakah Anda yakin ingin logout?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => logout()
        },
        {
          label: 'Tidak',
          onClick: () => {}
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Konfirmasi Logout</h1>
            <p>Apakah Anda yakin ingin logout?</p>
            <button onClick={() => { logout(); onClose(); }}>Ya</button>
            <button onClick={onClose}>Tidak</button>
          </div>
        );
      }
    });
  };

  let icon;

  // Pilih ikon berdasarkan konteks
  if (context === 'dashboard') {
    if (role === 'guru') {
      icon = <FaChalkboardTeacher />;
    } else if (role === 'siswa') {
      icon = <FaUserGraduate />;
    }
  } else if (context === 'history') {
    icon = <FaHistory />;
  } else if (context == 'attendance'){
    icon = <FaUserCheck />
  } else if (context == 'profile'){
    icon = <FaUser />
  } else if (context == 'manage-classes'){
    icon = <FaTasks />
  } else if (context == 'assignments'){
    icon = <FaClipboardList />
  } else if (context == 'student-progress'){
    icon = <FaChartLine />
  } else if (context == 'class-announcements'){
    icon = <FaBullhorn />
  } else if (context == 'discussion-forum'){
    icon = <FaComments />
  } else if (context == 'calendar'){
    icon = <FaCalendarAlt />
  } else if (context == 'digital-library'){
    icon = <FaBook />
  } else if (context == 'video-conference'){
    icon = <FaVideo />
  }

  return (
    <header className="dashboard-header">
      <h1>{icon} {title}</h1>
      <nav className="dashboard-nav">
        <ul>
          {role === 'guru' && (
            <>
              <li><NavLink to="/user"><FaChalkboardTeacher /><span>Teacher Section</span></NavLink></li>
              <li><NavLink to="/profile"><FaUser /><span>Profile</span></NavLink></li>
              <li><button onClick={handleLogout} className="logout-button"><FaSignOutAlt /><span>Logout</span></button></li>
            </>
          )}
          {role === 'siswa' && (
            <>
              <li><NavLink to="/user"><FaUserGraduate /><span>Student Section</span></NavLink></li>
              <li><NavLink to="/profile"><FaUser /><span>Profile</span></NavLink></li>
              <li><button onClick={handleLogout} className="logout-button"><FaSignOutAlt /><span>Logout</span></button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
