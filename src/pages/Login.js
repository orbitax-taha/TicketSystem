import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import Swal from 'sweetalert2';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedUsername = formData.username.trim();
    const trimmedPassword = formData.password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'Username and password are required!',
        confirmButtonText: 'OK',
      });
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        username: trimmedUsername,
        password: trimmedPassword,
      };
      console.log('Login payload:', payload);
      const response = await axiosInstance.post('/auth/login', payload);

      console.log('Login response:', response.data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', trimmedUsername);

      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Login successful!',
        timer: 1500,
        showConfirmButton: false,
      });
      navigate('/my-tickets');
    } catch (error) {
      console.error('Login error:', {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        fullResponse: error.response?.data,
        headers: error.response?.headers,
      });
      if (error.response?.status === 401) {
        Swal.fire({
          title: 'Login Failed',
          icon: 'error',
          text: error.response?.data?.message || 'Invalid username or password.',
          confirmButtonText: 'OK',
        });
      } else if (error.message.includes('Network Error')) {
        Swal.fire({
          title: 'Network Error',
          icon: 'error',
          text: 'Failed to connect to the server. Please check your network or contact the administrator.',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: error.response?.data?.message || 'Failed to login.',
          confirmButtonText: 'OK',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f5f7',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #dfe1e6',
    borderRadius: '4px',
    fontSize: '14px',
    color: '#172b4d',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0052cc',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const titleStyle = {
    color: '#172b4d',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={titleStyle}>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          style={inputStyle}
          disabled={isLoading}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyle}
          disabled={isLoading}
        />
        <button type="submit" style={buttonStyle} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;