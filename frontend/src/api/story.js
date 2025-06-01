
import axios from './axios'

export const createStoryRequest = (formData) =>
  axios.post(`/story/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const getStoriesRequest = () => axios.get('/story');

export const getStoryRequest = (id)=> axios.get(`/story/${id}`); 