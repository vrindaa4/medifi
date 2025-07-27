# Migration Guide - Medifi Restructuring

This guide helps you migrate from the old structure to the new organized structure.

## 🚀 What Changed

### Directory Structure
- **Old**: All files in root directory
- **New**: Organized into `backend/`, `frontend/`, and `shared/` folders

### Configuration
- **Old**: Environment variables scattered across files
- **New**: Centralized configuration in `backend/config/` and `frontend/config/`

### API Structure
- **Old**: Direct axios calls with hardcoded URLs
- **New**: Centralized API configuration with interceptors

## 📁 New Structure

```
medifi/
├── backend/                 # Backend server
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── server.js          # Main server file
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── config/        # Frontend configuration
│   │   └── helper/        # Helper functions
│   └── public/            # Static files
├── shared/                # Shared constants
│   └── constants/         # API constants
└── package.json           # Root package.json
```

## 🔧 Migration Steps

### 1. Environment Setup

**Backend:**
```bash
# Copy the example environment file
cp backend/env.example backend/.env

# Edit the .env file with your configuration
# Make sure to update:
# - MONGODB_URI
# - JWT_SECRET
# - PORT (if different from 1000)
```

**Frontend:**
```bash
# Copy the example environment file
cp frontend/env.example frontend/.env

# Edit the .env file with your configuration
# Make sure to update:
# - REACT_APP_SERVER_DOMAIN (for development: http://localhost:1000/api)
# - REACT_APP_SERVER_URL (for development: http://localhost:1000)
```

### 2. Install Dependencies

```bash
# Install all dependencies (both frontend and backend)
npm run install-all
```

### 3. Update Frontend Files

The following files need to be updated to use the new API structure:

**Files that need manual updates:**
- `frontend/src/pages/Register.jsx`
- `frontend/src/pages/ApplyDoctor.jsx`
- `frontend/src/pages/Profile.jsx`
- `frontend/src/components/AdminDoctors.jsx`
- `frontend/src/components/AdminApplications.jsx`
- `frontend/src/components/AdminAppointments.jsx`
- `frontend/src/components/DoctorApply.jsx`
- `frontend/src/components/Users.jsx`

**Update pattern:**
```javascript
// OLD
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
const { data } = await axios.post("/endpoint", data);

// NEW
import { postData } from "../helper/apiCall";
const data = await postData("/endpoint", data);
```

### 4. Start the Application

**Development (both frontend and backend):**
```bash
npm run dev:full
```

**Backend only:**
```bash
npm run dev
```

**Frontend only:**
```bash
cd frontend && npm start
```

## 🔍 Verification

### Backend Verification
1. Check if the server starts without errors
2. Verify database connection
3. Test API endpoints

### Frontend Verification
1. Check if the React app starts
2. Test login/register functionality
3. Verify API calls work correctly

## 🐛 Common Issues

### 1. Port Conflicts
- **Issue**: Port 1000 or 3000 already in use
- **Solution**: Change ports in environment files

### 2. Database Connection
- **Issue**: MongoDB connection fails
- **Solution**: Check MONGODB_URI in backend/.env

### 3. CORS Errors
- **Issue**: Frontend can't connect to backend
- **Solution**: Check CORS_ORIGIN in backend/.env

### 4. API Calls Failing
- **Issue**: Frontend API calls return errors
- **Solution**: Verify REACT_APP_SERVER_DOMAIN in frontend/.env

## 📝 Notes

- The old `server.js` file has been moved to `backend/server.js`
- All backend files are now in the `backend/` directory
- All frontend files are now in the `frontend/` directory
- API configuration is centralized in `frontend/src/config/api.js`
- Environment variables are organized in separate files

## 🆘 Support

If you encounter issues during migration:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that ports are not in use by other applications 