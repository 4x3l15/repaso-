import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Cambia según tu API
});

export default api;
