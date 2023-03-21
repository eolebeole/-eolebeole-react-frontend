import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eolebeole.es6.kr',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sessionToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use((response) => {
  const token = response.headers['x-session-token'];
  if (token) {
    localStorage.setItem('sessionToken', token);
  }
  return response;
});

export default api;
