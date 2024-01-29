import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.API_URL });

export const fetchStudyListInfo = () =>
  API.get('/studies').then((res) => {
    return res.data;
  });
