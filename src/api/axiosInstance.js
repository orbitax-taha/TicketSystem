
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://195.250.30.1:8086/api',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://195.250.30.1:8086/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;