# Firebase Migration Guide

## Overview
This guide will help you migrate from MongoDB to Firebase Firestore for the Medifi application.

## Prerequisites
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database in your Firebase project
3. Create a service account and download the JSON key file

## Step 1: Firebase Project Setup

### 1.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `medifi-app`
4. Enable Google Analytics (optional)
5. Click "Create project"

### 1.2 Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location (choose closest to your users)
5. Click "Done"

### 1.3 Create Service Account
1. Go to Project Settings (gear icon)
2. Click "Service accounts" tab
3. Click "Generate new private key"
4. Download the JSON file
5. Save it securely (don't commit to git)

## Step 2: Environment Configuration

### 2.1 Update Environment Variables
Create a `.env` file in the backend directory with your Firebase credentials:

```env
# Firebase Configuration
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your-client-id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40your-project.iam.gserviceaccount.com

# Other configurations remain the same
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:3000
```

### 2.2 Install Dependencies
```bash
npm install firebase-admin
```

## Step 3: Database Schema Migration

### 3.1 Firestore Collections Structure
Your Firestore database will have these collections:

```
/users
  - userId (document ID)
    - firstname: string
    - lastname: string
    - email: string
    - password: string (hashed)
    - mobile: string
    - pic: string (URL)
    - isAdmin: boolean
    - createdAt: timestamp
    - updatedAt: timestamp

/doctors
  - doctorId (document ID)
    - userId: string (reference to user)
    - specialization: string
    - experience: number
    - fees: number
    - isDoctor: boolean
    - location: string
    - languages: string
    - availability: string
    - createdAt: timestamp
    - updatedAt: timestamp

/appointments
  - appointmentId (document ID)
    - userId: string (reference to user)
    - doctorId: string (reference to doctor)
    - date: string
    - time: string
    - status: string
    - createdAt: timestamp
    - updatedAt: timestamp

/notifications
  - notificationId (document ID)
    - userId: string (reference to user)
    - title: string
    - message: string
    - isRead: boolean
    - createdAt: timestamp
```

## Step 4: Update Controllers

### 4.1 User Controller Example
```javascript
const { getFirestore } = require('../config/firebase');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const db = getFirestore();
    const usersSnapshot = await db.collection('users').get();
    const users = [];
    
    usersSnapshot.forEach(doc => {
      users.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### 4.2 Doctor Controller Example
```javascript
const { getFirestore } = require('../config/firebase');

// Get all doctors with user details
const getAllDoctors = async (req, res) => {
  try {
    const db = getFirestore();
    const doctorsSnapshot = await db.collection('doctors').get();
    const doctors = [];
    
    for (const doc of doctorsSnapshot.docs) {
      const doctorData = doc.data();
      const userDoc = await db.collection('users').doc(doctorData.userId).get();
      const userData = userDoc.data();
      
      doctors.push({
        id: doc.id,
        ...doctorData,
        userId: {
          id: userDoc.id,
          ...userData
        }
      });
    }
    
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

## Step 5: Data Migration (Optional)

If you have existing MongoDB data, you can create a migration script:

```javascript
// migration-script.js
const mongoose = require('mongoose');
const { getFirestore } = require('./config/firebase');

const migrateData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/medifi');
    
    // Get Firestore
    const db = getFirestore();
    
    // Migrate users
    const users = await mongoose.model('User').find({});
    for (const user of users) {
      await db.collection('users').doc(user._id.toString()).set({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        mobile: user.mobile,
        pic: user.pic,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      });
    }
    
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  }
};

migrateData();
```

## Step 6: Security Rules

Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Doctors can be read by anyone
    match /doctors/{doctorId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Appointments
    match /appointments/{appointmentId} {
      allow read, write: if request.auth != null;
    }
    
    // Notifications
    match /notifications/{notificationId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Step 7: Testing

1. Start your backend server
2. Test all API endpoints
3. Verify data is being stored in Firestore
4. Check the Firebase console to see your data

## Benefits of Firebase

1. **Real-time updates**: Firestore provides real-time listeners
2. **Scalability**: Automatic scaling
3. **Security**: Built-in authentication and security rules
4. **Offline support**: Works offline with sync
5. **Cost-effective**: Pay only for what you use
6. **No server management**: Fully managed by Google

## Troubleshooting

### Common Issues:
1. **Private key format**: Make sure to replace `\n` with actual newlines
2. **CORS issues**: Update CORS configuration
3. **Authentication**: Ensure JWT tokens are properly handled
4. **Data structure**: Verify your data matches the expected schema

### Support:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) 