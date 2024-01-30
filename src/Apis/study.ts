import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.API_URL });

export const fetchStudyListInfo = () =>
  API.get('/studies').then((res) => {
    return res.data;
  });

export const CreateStudies = () =>
  API.post('/studies/create').then((res) => {
    return res.data;
  });

export const ModifyStudies = () =>
  API.put('/studies/modify').then((res) => {
    return res.data;
  });

export const GatherStudies = () =>
  API.post('/studies/gather').then((res) => {
    return res.data;
  });
