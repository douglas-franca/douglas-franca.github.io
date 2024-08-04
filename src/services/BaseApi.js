import axios from 'axios';

const apiBackend = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiBackend;