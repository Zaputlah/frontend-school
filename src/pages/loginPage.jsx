import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../apiService'; // Import login dari apiService
import logo from '../assets/smn22.png';
import { useAuth } from '../auth/AuthContext';
import '../styles/loginPages.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login: loginContext } = useAuth(); // Gunakan context untuk login
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-page');
    document.title = "Login - SMAN 22 Bekasi";
    return () => document.body.classList.remove('login-page');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ username, password });
      console.log('Data received:', data);

      const { user, token } = data;

      if (!user || !user.role) {
        throw new Error('User or user role is missing');
      }

      loginContext(user, token); // Login dengan user dan token

      document.querySelector('.login-container').classList.add('zoom-out');

      setTimeout(() => {
        switch (user.role) {
          case 'superadmin':
            navigate('/admin');
            break;
          case 'guru':
          case 'siswa':
            navigate('/user');
            break;
          default:
            navigate('/login');
            break;
        }
      }, 700); // Sesuaikan durasi ini dengan durasi animasi CSS
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
