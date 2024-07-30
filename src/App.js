// src/App.js
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProfilePage from './components/profile';
import ProtectedRoute from './components/protectedRoute';
import AdminPage from './pages/adminPage';
import AssigmentPage from './pages/Assignments';
import CalendarPage from './pages/Calendar';
import ClassAnnouncementsPage from './pages/ClassAnnouncements';
import DigitalLibraryPage from './pages/DigitalLibrary';
import DiscussionForumPage from './pages/DiscussionForum';
import GradesPage from './pages/Grades';
import HistoryPage from './pages/history';
import LibraryPage from './pages/Library';
import LoginPage from './pages/loginPage';
import ManagePage from './pages/manage-classes';
import AttendencePage from './pages/MarkAttendancePage';
import MessagesPage from './pages/Messages';
import StudentProgressPage from './pages/StudentProgress';
import UpcomingEventsPage from './pages/UpcomingEvents';
import UserPage from './pages/UserPage';
import VideoConferencePage from './pages/VideoConference';
 
            
            
            
            
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute role="superadmin">
                <AdminPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}>
                <UserPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute role={["guru", "siswa","superadmin"]}> {/* Add protected route */}
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/manage-attendence" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <AttendencePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/manage-classes" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <ManagePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Assigments" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <AssigmentPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/class-announcements" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <ClassAnnouncementsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student-progress" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <StudentProgressPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/discussion-forum" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <DiscussionForumPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <CalendarPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/digital-library" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <DigitalLibraryPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/video-conference" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <VideoConferencePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/history" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <HistoryPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/grades" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <GradesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/upcoming-events" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <UpcomingEventsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/messages" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <MessagesPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/library" 
            element={
              <ProtectedRoute role={["guru", "siswa"]}> {/* Add protected route */}
                <LibraryPage />
              </ProtectedRoute>
            } 
          />
          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
