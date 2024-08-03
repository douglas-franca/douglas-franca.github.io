import axios from 'axios';

const apiBackend = axios.create({
  baseURL: process.env.BACK_END_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiBackend;