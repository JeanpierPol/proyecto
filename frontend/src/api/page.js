import axios from './axios'
const URL = '/page';

export const createPageRequest = (formData) => axios.post(`${URL}/create`, formData);
export const getPagesByStoryRequest = (storyId) => axios.get(`${URL}/story/${storyId}`);
export const getPageRequest = (pageId)=> axios.get(`${URL}/${pageId}`)