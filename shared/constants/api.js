// API Routes
const API_ROUTES = {
  // User Routes
  USER: {
    BASE: '/user',
    REGISTER: '/register',
    LOGIN: '/login',
    PROFILE: '/profile',
    UPDATE_PROFILE: '/update-profile',
  },
  
  // Doctor Routes
  DOCTOR: {
    BASE: '/doctor',
    APPLY: '/apply',
    GET_ALL: '/get-all-doctors',
    GET_BY_ID: '/get-doctor-by-id',
    UPDATE_STATUS: '/update-doctor-status',
  },
  
  // Appointment Routes
  APPOINTMENT: {
    BASE: '/appointment',
    BOOK: '/book-appointment',
    GET_USER_APPOINTMENTS: '/get-user-appointments',
    GET_DOCTOR_APPOINTMENTS: '/get-doctor-appointments',
    UPDATE_STATUS: '/update-appointment-status',
  },
  
  // Notification Routes
  NOTIFICATION: {
    BASE: '/notification',
    GET_USER_NOTIFICATIONS: '/get-user-notifications',
    MARK_AS_READ: '/mark-as-read',
  },
};

// HTTP Status Codes
const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

// User Roles
const USER_ROLES = {
  USER: 'user',
  DOCTOR: 'doctor',
  ADMIN: 'admin',
};

// Appointment Status
const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  COMPLETED: 'completed',
};

// Doctor Status
const DOCTOR_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

module.exports = {
  API_ROUTES,
  STATUS_CODES,
  USER_ROLES,
  APPOINTMENT_STATUS,
  DOCTOR_STATUS,
}; 