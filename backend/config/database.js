const { initializeFirebase, getFirestore } = require('./firebase');

const connectDB = async () => {
  try {
    // Initialize Firebase
    const firebase = initializeFirebase();
    const db = getFirestore();
    
    console.log('Firebase Firestore Connected Successfully');
    return db;
  } catch (error) {
    console.error(`Firebase Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 