const { getFirestore } = require('../config/firebase');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/environment');

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const db = getFirestore();
    const doctorsSnapshot = await db.collection('doctors').get();
    const doctors = [];
    
    for (const doc of doctorsSnapshot.docs) {
      const doctorData = doc.data();
      
      // Get user details for this doctor
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
    
    res.json({
      success: true,
      data: doctors
    });
  } catch (error) {
    console.error('Error getting doctors:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching doctors',
      error: error.message
    });
  }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getFirestore();
    
    const doctorDoc = await db.collection('doctors').doc(id).get();
    
    if (!doctorDoc.exists) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    const doctorData = doctorDoc.data();
    const userDoc = await db.collection('users').doc(doctorData.userId).get();
    const userData = userDoc.data();
    
    res.json({
      success: true,
      data: {
        id: doctorDoc.id,
        ...doctorData,
        userId: {
          id: userDoc.id,
          ...userData
        }
      }
    });
  } catch (error) {
    console.error('Error getting doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching doctor',
      error: error.message
    });
  }
};

// Create new doctor
const createDoctor = async (req, res) => {
  try {
    const { userId, specialization, experience, fees, location, languages, availability } = req.body;
    const db = getFirestore();
    
    // Check if user exists
    const userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Check if doctor already exists for this user
    const existingDoctor = await db.collection('doctors')
      .where('userId', '==', userId)
      .get();
    
    if (!existingDoctor.empty) {
      return res.status(400).json({
        success: false,
        message: 'Doctor profile already exists for this user'
      });
    }
    
    // Create doctor document
    const doctorData = {
      userId,
      specialization,
      experience: parseInt(experience),
      fees: parseInt(fees),
      isDoctor: true,
      location: location || 'Medical Center',
      languages: languages || 'English',
      availability: availability || 'Mon-Fri, 9AM-5PM',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const docRef = await db.collection('doctors').add(doctorData);
    
    res.status(201).json({
      success: true,
      message: 'Doctor profile created successfully',
      data: {
        id: docRef.id,
        ...doctorData
      }
    });
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating doctor profile',
      error: error.message
    });
  }
};

// Update doctor
const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const db = getFirestore();
    
    // Check if doctor exists
    const doctorDoc = await db.collection('doctors').doc(id).get();
    if (!doctorDoc.exists) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    // Update doctor data
    updateData.updatedAt = new Date();
    await db.collection('doctors').doc(id).update(updateData);
    
    res.json({
      success: true,
      message: 'Doctor profile updated successfully'
    });
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating doctor profile',
      error: error.message
    });
  }
};

// Delete doctor
const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getFirestore();
    
    // Check if doctor exists
    const doctorDoc = await db.collection('doctors').doc(id).get();
    if (!doctorDoc.exists) {
      return res.status(404).json({
        success: false,
        message: 'Doctor not found'
      });
    }
    
    // Delete doctor document
    await db.collection('doctors').doc(id).delete();
    
    res.json({
      success: true,
      message: 'Doctor profile deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting doctor profile',
      error: error.message
    });
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
}; 