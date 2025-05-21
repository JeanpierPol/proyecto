import axios from 'axios'

const API = 'http://localhost:3000/api';

export const registerRequest = (formData) =>
  axios.post(`${API}/auth/register`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
