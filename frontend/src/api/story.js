
import axios from './axios'

const URL = '/story';

export const createStoryRequest = (formData) =>
  axios.post(`${URL}/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const getStoriesRequest = () => axios.get(`${URL}`);

export const getStoryRequest = (id)=> axios.get(`${URL}/${id}`); 