// src/pages/ErrorPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  const message = location.state?.message || 'Terjadi kesalahan';

  return (
    <div>
      <h1>403 Forbidden</h1>
      <p>{message}</p>
      <a href="/login">Kembali ke Login</a>
    </div>
  );
};

export default ErrorPage;
