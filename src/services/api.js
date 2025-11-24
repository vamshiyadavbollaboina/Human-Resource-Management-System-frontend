import axios from 'axios';

const API_BASE = 'https://human-resource-management-system-backend-3d3f.onrender.com'; // backend URL

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
});

// Attach JWT token automatically for every request 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// ---------- AUTH ----------
export const loginUser = async (data) => {
  const res = await api.post('/api/auth/login', data);
  return res.data;
};

export const registerOrg = async (data) => {
  const res = await api.post('/api/auth/register', data);
  return res.data;
};

// ---------- EMPLOYEES ----------
export const getEmployees = async () => {
  const res = await api.get('/api/employees');
  return res.data;
};

export const addEmployee = async (data) => {
  const res = await api.post('/api/employees', data);
  return res.data;
};

// ---------- TEAMS ----------
export const getTeams = async () => {
  const res = await api.get('/api/teams');
  return res.data;
};

export const addTeam = async (data) => {
  const res = await api.post('/api/teams', data);
  return res.data;
};

export default api;
