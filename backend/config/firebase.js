const admin = require('firebase-admin');
const config = require('./environment');

// Firebase Admin SDK configuration
const serviceAccount = {
  type: config.FIREBASE_TYPE,
  project_id: config.FIREBASE_PROJECT_ID,
  private_key_id: config.FIREBASE_PRIVATE_KEY_ID,
  private_key: config.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: config.FIREBASE_CLIENT_EMAIL,
  client_id: config.FIREBASE_CLIENT_ID,
  auth_uri: config.FIREBASE_AUTH_URI,
  token_uri: config.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: config.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: config.FIREBASE_CLIENT_X509_CERT_URL
};

// Initialize Firebase Admin SDK
const initializeFirebase = () => {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${config.FIREBASE_PROJECT_ID}.firebaseio.com`
      });
    }
    
    console.log('Firebase Admin SDK initialized successfully');
    return admin;
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    throw error;
  }
};

// Get Firestore instance
const getFirestore = () => {
  const app = initializeFirebase();
  return app.firestore();
};

// Get Auth instance
const getAuth = () => {
  const app = initializeFirebase();
  return app.auth();
};

module.exports = {
  initializeFirebase,
  getFirestore,
  getAuth,
  admin
}; 