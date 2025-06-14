
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://195.250.30.1:8086/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;