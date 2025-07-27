import axios from "axios";
import { getCurrentConfig } from '../config/api';

// Set default base URL
const config = getCurrentConfig();
axios.defaults.baseURL = config.BASE_URL;

// Request interceptor to add auth token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const putData = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const deleteData = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export { fetchData, postData, putData, deleteData };
export default fetchData;
