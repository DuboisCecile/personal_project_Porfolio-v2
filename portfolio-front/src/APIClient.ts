import axios from 'axios';

// If our API is deployed somewhere else, we just have to change the
// VITE_API_BASE_URL variable in .env file at the root of the project
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default API;
