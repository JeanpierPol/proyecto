import axios from './axios'
const URL = '/auth'
export const registerRequest = (formData) =>
  axios.post(`${URL}/register`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const loginRequest = (formData) => axios.post(`${URL}/login`, formData)

export const verifyTokenRequest = (token) => axios.get(`${URL}/verify`, token)
