import axios from './axios';
const URL = '/tag';

export const getAllTag = ()=> axios.get(`${URL}`);