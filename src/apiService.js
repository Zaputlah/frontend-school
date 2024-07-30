import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
};

export const markAttendance = async (token, attendanceData, medicalNote) => {
  const formData = new FormData();
  // FormData tidak perlu classId jika classId ditentukan di backend berdasarkan user
  formData.append('status', attendanceData.status);
  if (medicalNote) {
    formData.append('medicalNote', medicalNote);
  }

  const response = await axios.post(`${API_URL}/attendance`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const checkAttendanceStatus = async (token) => {
  const response = await fetch('http://localhost:8000/api/attendance/status', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to check attendance status');
  }

  return response.json();
};

export const getAttendanceHistory = async () => {
  const token = sessionStorage.getItem('authToken'); // Ambil token dari sessionStorage
  console.log('Token sent:', token); // Debugging log

  const response = await axios.get(`${API_URL}/attendance/history`, {
    headers: { 'x-access-token': token }, // Pastikan nama header sesuai dengan yang diharapkan di backend
  });
  return response.data;
};
