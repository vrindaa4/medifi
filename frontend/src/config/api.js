// API Configuration
const API_CONFIG = {
  // Development
  DEVELOPMENT: {
    BASE_URL: 'http://localhost:1000/api',
    SERVER_URL: 'http://localhost:1000',
  },
  
  // Production
  PRODUCTION: {
    BASE_URL: process.env.REACT_APP_SERVER_DOMAIN || 'https://healthbooker.onrender.com/api',
    SERVER_URL: process.env.REACT_APP_SERVER_URL || 'https://healthbooker.onrender.com',
  },
};

// Get current environment
const getCurrentConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? API_CONFIG.DEVELOPMENT : API_CONFIG.PRODUCTION;
};

// API Endpoints
const API_ENDPOINTS = {
  // User endpoints
  USER: {
    REGISTER: '/user/register',
    LOGIN: '/user/login',
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/update-profile',
  },
  
  // Doctor endpoints
  DOCTOR: {
    APPLY: '/doctor/apply',
    GET_ALL: '/doctor/get-all-doctors',
    GET_BY_ID: '/doctor/get-doctor-by-id',
    UPDATE_STATUS: '/doctor/update-doctor-status',
  },
  
  // Appointment endpoints
  APPOINTMENT: {
    BOOK: '/appointment/book-appointment',
    GET_USER_APPOINTMENTS: '/appointment/get-user-appointments',
    GET_DOCTOR_APPOINTMENTS: '/appointment/get-doctor-appointments',
    UPDATE_STATUS: '/appointment/update-appointment-status',
  },
  
  // Notification endpoints
  NOTIFICATION: {
    GET_USER_NOTIFICATIONS: '/notification/get-user-notifications',
    MARK_AS_READ: '/notification/mark-as-read',
  },
};

export { API_CONFIG, getCurrentConfig, API_ENDPOINTS }; 