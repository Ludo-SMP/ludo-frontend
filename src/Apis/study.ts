import axios from 'axios';
export const API = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 3000,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
});

export const fetchStudyListInfo = () =>
  API.get('/studies').then((res) => {
    return res.data;
  });
