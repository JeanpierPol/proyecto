import axios from "axios";

const API = import.meta.env.VITE_BACK_HOST;

const instance = axios.create({
    baseURL: API,
    withCredentials: true
})

export default instance