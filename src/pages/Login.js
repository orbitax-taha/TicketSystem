// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import Swal from 'sweetalert2';
// import logo from './LOGO.png'; // Adjust if needed

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
//     const { username, password } = formData;
//     if (!username.trim() || !password.trim()) {
//       Swal.fire({
//         title: 'Validation Error',
//         icon: 'error',
//         text: 'Username and password are required!',
//       });
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.post('/auth/login', {
//         username: username.trim(),
//         password: password.trim(),
//       });
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('username', username);
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
//           text: error.response.data?.message || 'Invalid credentials.',
//         });
//       } else {
//         Swal.fire({
//           title: 'Error',
//           icon: 'error',
//           text: 'An unexpected error occurred. Please try again later.',
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <img src={logo} alt="Logo" style={styles.logo} />
//         <h2 style={styles.title}>Welcome Back</h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleInputChange}
//           style={styles.input}
//           disabled={isLoading}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           style={styles.input}
//           disabled={isLoading}
//         />
//         <button type="submit" style={styles.button} disabled={isLoading}>
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           input:focus {
//             border-color: #6a11cb !important;
//             box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.2);
//             outline: none;
//           }

//           button:hover {
//             background-color: #4e0cc0 !important;
//           }

//           button:active {
//             transform: scale(0.97);
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     background: 'linear-gradient(135deg,rgba(255, 255, 255, 0.76),rgba(255, 255, 255, 0.87))',
//     fontFamily: "'Segoe UI', sans-serif",
//   },
//   form: {
//     animation: 'fadeIn 1s ease',
//     backgroundColor: '#fff',
//     padding: '50px 40px',
//     borderRadius: '15px',
//     boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
//     width: '100%',
//     maxWidth: '400px',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease',
//   },
//   logo: {
//     width: '280px',
//     height: '80px',
//     marginBottom: '20px',
//   },
//   title: {
//     fontSize: '26px',
//     color: '#333',
//     marginBottom: '25px',
//     fontWeight: '600',
//   },
//   input: {
//     width: '100%',
//     marginRight: "100px",
//     padding: '12px',
//     marginBottom: '15px',
//     fontSize: '15px',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//   },
//   button: {
//     width: '200px',
//     padding: '12px',
//     backgroundColor: '#6a11cb',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     marginTop: '10px',
//   },
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import Swal from 'sweetalert2';
import logo from '../components/LOGO.png'; // Adjust if needed

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
      localStorage.setItem('role', response.data.role || 'user'); // Store role
      // Swal.fire({
      //   title: 'Success',
      //   icon: 'success',
      //   text: 'Login successful!',
      //   timer: 1500,
      //   showConfirmButton: false,
      // });
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
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.87))',
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
