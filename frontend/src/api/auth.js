import axios from './axios'

export const registerRequest = (formData) =>
  axios.post(`/auth/register`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const loginRequest = (formData) => axios.post(`/auth/login`, formData)

export const verifyTokenRequest = (token) => axios.get('/auth/verify', token)