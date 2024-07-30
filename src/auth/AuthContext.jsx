import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      // Simpan token jika ada
      const token = sessionStorage.getItem('authToken');
      if (token) {
        sessionStorage.setItem('authToken', token);
      }
    } else {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('authToken');
    }
  }, [user]);

  const login = (user, token) => {
    setUser(user);
    // Simpan token saat login
    sessionStorage.setItem('authToken', token);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
