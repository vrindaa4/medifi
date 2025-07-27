const express = require("express");
const cors = require("cors");
const path = require("path");

// Import configurations
const config = require('./config/environment');
const connectDB = require('./config/database');

// Import routes
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter");

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: config.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use(`${config.API_PREFIX}/user`, userRouter);
app.use(`${config.API_PREFIX}/doctor`, doctorRouter);
app.use(`${config.API_PREFIX}/appointment`, appointRouter);
app.use(`${config.API_PREFIX}/notification`, notificationRouter);

// Serve static files from React build
app.use(express.static(path.join(__dirname, config.CLIENT_BUILD_PATH)));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, config.CLIENT_BUILD_PATH, "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: config.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT} in ${config.NODE_ENV} mode`);
}); 