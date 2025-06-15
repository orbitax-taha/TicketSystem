// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import Swal from 'sweetalert2';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const trimmedUsername = formData.username.trim();
//     const trimmedPassword = formData.password.trim();

//     if (!trimmedUsername || !trimmedPassword) {
//       Swal.fire({
//         title: 'Validation Error',
//         icon: 'error',
//         text: 'Username and password are required!',
//         confirmButtonText: 'OK',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const payload = {
//         username: trimmedUsername,
//         password: trimmedPassword,
//       };
//       console.log('Login payload:', payload);
//       const response = await axiosInstance.post('/auth/login', payload);

//       console.log('Login response:', response.data);

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('username', trimmedUsername);

//       Swal.fire({
//         title: 'Success',
//         icon: 'success',
//         text: 'Login successful!',
//         timer: 1500,
//         showConfirmButton: false,
//       });
//       navigate('/my-tickets');
//     } catch (error) {
//       console.error('Login error:', {
//         status: error.response?.status,
//         message: error.response?.data?.message || error.message,
//         fullResponse: error.response?.data,
//         headers: error.response?.headers,
//       });
//       if (error.response?.status === 401) {
//         Swal.fire({
//           title: 'Login Failed',
//           icon: 'error',
//           text: error.response?.data?.message || 'Invalid username or password.',
//           confirmButtonText: 'OK',
//         });
//       } else if (error.message.includes('Network Error')) {
//         Swal.fire({
//           title: 'Network Error',
//           icon: 'error',
//           text: 'Failed to connect to the server. Please check your network or contact the administrator.',
//           confirmButtonText: 'OK',
//         });
//       } else {
//         Swal.fire({
//           title: 'Error',
//           icon: 'error',
//           text: error.response?.data?.message || 'Failed to login.',
//           confirmButtonText: 'OK',
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f5f7',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const formStyle = {
//     backgroundColor: '#ffffff',
//     padding: '40px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//     width: '400px',
//     textAlign: 'center',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     margin: '10px 0',
//     border: '1px solid #dfe1e6',
//     borderRadius: '4px',
//     fontSize: '14px',
//     color: '#172b4d',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#0052cc',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginTop: '10px',
//   };

//   const titleStyle = {
//     color: '#172b4d',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//   };

//   return (
//     <div style={containerStyle}>
//       <form style={formStyle} onSubmit={handleSubmit}>
//         <h2 style={titleStyle}>Login</h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//           style={inputStyle}
//           disabled={isLoading}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           style={inputStyle}
//           disabled={isLoading}
//         />
//         <button type="submit" style={buttonStyle} disabled={isLoading}>
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import Swal from 'sweetalert2';
// import logo from './LOGO.png' // Adjust path if necessary

// const Login = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const trimmedUsername = formData.username.trim();
//     const trimmedPassword = formData.password.trim();

//     if (!trimmedUsername || !trimmedPassword) {
//       Swal.fire({
//         title: 'Validation Error',
//         icon: 'error',
//         text: 'Username and password are required!',
//         confirmButtonText: 'OK',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.post('/auth/login', {
//         username: trimmedUsername,
//         password: trimmedPassword,
//       });

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('username', trimmedUsername);

//       Swal.fire({
//         title: 'Success',
//         icon: 'success',
//         text: 'Login successful!',
//         timer: 1500,
//         showConfirmButton: false,
//       });
//       navigate('/my-tickets');
//     } catch (error) {
//       if (error.response?.status === 401) {
//         Swal.fire({
//           title: 'Login Failed',
//           icon: 'error',
//           text: error.response?.data?.message || 'Invalid username or password.',
//           confirmButtonText: 'OK',
//         });
//       } else if (error.message.includes('Network Error')) {
//         Swal.fire({
//           title: 'Network Error',
//           icon: 'error',
//           text: 'Failed to connect to the server. Please check your network or contact the administrator.',
//           confirmButtonText: 'OK',
//         });
//       } else {
//         Swal.fire({
//           title: 'Error',
//           icon: 'error',
//           text: error.response?.data?.message || 'Failed to login.',
//           confirmButtonText: 'OK',
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     background: 'linear-gradient(to right,rgba(255, 255, 255, 0.76),rgba(255, 255, 255, 0.88))',
//     fontFamily: 'Segoe UI, sans-serif',
//   };

//   const formStyle = {
//     backgroundColor: '#ffffff',
//     padding: '50px 40px',
//     borderRadius: '12px',
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
//     width: '400px',
//     textAlign: 'center',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px',
//     margin: '10px 0',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     fontSize: '15px',
//     transition: 'border 0.3s',
//   };

//   const inputFocusStyle = {
//     outline: 'none',
//     border: '1px solid #2575fc',
//   };

//   const buttonStyle = {
//     width: '300px',
//     padding: '12px',
//     backgroundColor: '#2575fc',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     marginTop: '15px',
//     transition: 'background-color 0.3s',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#1a5bcc',
//   };

//   const logoStyle = {
//     width: '270px',
//     height: '80px',
//     marginBottom: '20px',
//   };

//   const titleStyle = {
//     color: '#333',
//     fontSize: '26px',
//     fontWeight: '600',
//     marginBottom: '25px',
//   };

//   return (
//     <div style={containerStyle}>
//       <form style={formStyle} onSubmit={handleSubmit}>
//         <img src={logo} alt="App Logo" style={logoStyle} />
//         <h2 style={titleStyle}>Welcome Back</h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//           style={{ ...inputStyle }}
//           onFocus={(e) => e.target.style.border = inputFocusStyle.border}
//           onBlur={(e) => e.target.style.border = inputStyle.border}
//           disabled={isLoading}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           style={{ ...inputStyle }}
//           onFocus={(e) => e.target.style.border = inputFocusStyle.border}
//           onBlur={(e) => e.target.style.border = inputStyle.border}
//           disabled={isLoading}
//         />
//         <button
//           type="submit"
//           style={buttonStyle}
//           onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
//           onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
//           disabled={isLoading}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import Swal from 'sweetalert2';
import logo from './LOGO.png'; // Adjust if needed

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (!username.trim() || !password.trim()) {
      Swal.fire({
        title: 'Validation Error',
        icon: 'error',
        text: 'Username and password are required!',
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', {
        username: username.trim(),
        password: password.trim(),
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username);
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Login successful!',
        timer: 1500,
        showConfirmButton: false,
      });
      navigate('/my-tickets');
    } catch (error) {
      if (error.response?.status === 401) {
        Swal.fire({
          title: 'Login Failed',
          icon: 'error',
          text: error.response.data?.message || 'Invalid credentials.',
        });
      } else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'An unexpected error occurred. Please try again later.',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>Welcome Back</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          style={styles.input}
          disabled={isLoading}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={styles.input}
          disabled={isLoading}
        />
        <button type="submit" style={styles.button} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          input:focus {
            border-color: #6a11cb !important;
            box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
            outline: none;
          }

          button:hover {
            background-color: #4e0cc0 !important;
          }

          button:active {
            transform: scale(0.97);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg,rgba(255, 255, 255, 0.76),rgba(255, 255, 255, 0.87))',
    fontFamily: "'Segoe UI', sans-serif",
  },
  form: {
    animation: 'fadeIn 1s ease',
    backgroundColor: '#fff',
    padding: '50px 40px',
    borderRadius: '15px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  logo: {
    width: '280px',
    height: '80px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '26px',
    color: '#333',
    marginBottom: '25px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    marginRight: "100px",
    padding: '12px',
    marginBottom: '15px',
    fontSize: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  button: {
    width: '200px',
    padding: '12px',
    backgroundColor: '#6a11cb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginTop: '10px',
  },
};

export default Login;
