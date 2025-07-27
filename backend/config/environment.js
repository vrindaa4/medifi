require('dotenv').config();

const config = {
  // Server Configuration
  PORT: process.env.PORT || 1000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database Configuration - Firebase
  FIREBASE_TYPE: process.env.FIREBASE_TYPE || 'service_account',
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || 'your-project-id',
  FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID || 'your-private-key-id',
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY || 'your-private-key',
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL || 'your-client-email',
  FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID || 'your-client-id',
  FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI || 'https://accounts.google.com/o/oauth2/auth',
  FIREBASE_TOKEN_URI: process.env.FIREBASE_TOKEN_URI || 'https://oauth2.googleapis.com/token',
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || 'https://www.googleapis.com/oauth2/v1/certs',
  FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL || 'your-cert-url',
  
  // Legacy MongoDB Configuration (for migration)
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/medifi',
  
  // JWT Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  
  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  
  // API Configuration
  API_PREFIX: '/api',
  
  // Client Configuration
  CLIENT_BUILD_PATH: '../frontend/build',
  
  // Cloudinary Configuration (if used)
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

module.exports = config; 