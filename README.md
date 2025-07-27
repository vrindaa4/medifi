# Medifi - Doctor Appointment System

A comprehensive doctor appointment booking system built with Node.js, Express, MongoDB, and React.

## 🎯 **Features:**

### 1. **Organized Directory Structure**
- **Backend**: All server-side code moved to `backend/` folder
- **Frontend**: React app moved to `frontend/` folder  
- **Shared**: Common constants in `shared/` folder
- **Configuration**: Centralized config files in `backend/config/`

### 2. **Enhanced API Structure**
- **Before**: Scattered axios calls with hardcoded URLs
- **After**: Centralized API configuration with automatic token management and error handling

### 3. **Improved Development Experience**
- Added new npm scripts for easier development
- Better environment variable management
- Enhanced error handling and authentication

### 4. **Security Enhancements**
- Automatic token management in API calls
- Better CORS configuration
- Improved error handling with automatic logout on auth failures

## 🚀 **New Scripts Available:**
```bash
npm run dev:full      # Start both frontend and backend
npm run dev           # Start backend only
npm run install-all   # Install all dependencies
npm run build         # Build frontend for production
```

## 🎯 Features

- **User Management**: Registration, login, profile management
- **Doctor Management**: Doctor applications, approval system
- **Appointment Booking**: Book, manage, and track appointments
- **Admin Panel**: Admin dashboard for managing users, doctors, and appointments
- **Notifications**: Real-time notifications for users
- **Responsive Design**: Mobile-friendly interface

## 🔒 Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization

## 🚀 Deployment

### Backend Deployment
1. Set up your MongoDB database
2. Configure environment variables
3. Deploy to your preferred platform (Heroku, Railway, etc.)

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🎯 **Next Steps:**

1. **Set up environment files:**
   ```bash
   cp backend/env.example backend/.env
   cp frontend/env.example frontend/.env
   ```

2. **Install dependencies:**
   ```bash
   npm run install-all
   ```

3. **Start development:**
   ```bash
   npm run dev:full
   ```

## 📁 **New Structure:**
```
medifi/
├── backend/          # All server-side code
├── frontend/         # React application  
├── shared/           # Shared constants
└── package.json      # Root configuration
```
