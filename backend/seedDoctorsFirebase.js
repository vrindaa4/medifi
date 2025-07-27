const { initializeFirebase, getFirestore } = require('./config/firebase');
const bcrypt = require("bcrypt");
require("dotenv").config();

// Initialize Firebase
const firebase = initializeFirebase();
const db = getFirestore();

const sampleDoctors = [
  {
    user: {
      firstname: "Sarah",
      lastname: "Johnson",
      email: "sarah.johnson@medifi.com",
      password: "password123",
      age: 35,
      gender: "female",
      mobile: 5551234567,
      address: "123 Medical Center Dr, Downtown",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Cardiology",
      experience: 12,
      fees: 150,
      languages: "English, Spanish",
      availability: "Mon-Fri, 9AM-5PM",
      location: "Downtown Medical Center"
    }
  },
  {
    user: {
      firstname: "Michael",
      lastname: "Chen",
      email: "michael.chen@medifi.com",
      password: "password123",
      age: 42,
      gender: "male",
      mobile: 5552345678,
      address: "456 Health Plaza, Midtown",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Neurology",
      experience: 15,
      fees: 180,
      languages: "English, Mandarin",
      availability: "Mon-Thu, 8AM-4PM",
      location: "Midtown Neurology Clinic"
    }
  },
  {
    user: {
      firstname: "Emily",
      lastname: "Rodriguez",
      email: "emily.rodriguez@medifi.com",
      password: "password123",
      age: 38,
      gender: "female",
      mobile: 5553456789,
      address: "789 Wellness Ave, Uptown",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Pediatrics",
      experience: 8,
      fees: 120,
      languages: "English, Spanish",
      availability: "Mon-Sat, 9AM-6PM",
      location: "Uptown Children's Hospital"
    }
  },
  {
    user: {
      firstname: "David",
      lastname: "Thompson",
      email: "david.thompson@medifi.com",
      password: "password123",
      age: 45,
      gender: "male",
      mobile: 5554567890,
      address: "321 Care Blvd, Westside",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Orthopedics",
      experience: 18,
      fees: 200,
      languages: "English",
      availability: "Mon-Fri, 7AM-3PM",
      location: "Westside Orthopedic Center"
    }
  },
  {
    user: {
      firstname: "Lisa",
      lastname: "Wang",
      email: "lisa.wang@medifi.com",
      password: "password123",
      age: 33,
      gender: "female",
      mobile: 5555678901,
      address: "654 Medical Way, Eastside",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Dermatology",
      experience: 10,
      fees: 140,
      languages: "English, Mandarin",
      availability: "Tue-Sat, 10AM-6PM",
      location: "Eastside Dermatology Clinic"
    }
  },
  {
    user: {
      firstname: "James",
      lastname: "Wilson",
      email: "james.wilson@medifi.com",
      password: "password123",
      age: 50,
      gender: "male",
      mobile: 5556789012,
      address: "987 Health St, Northside",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Oncology",
      experience: 20,
      fees: 250,
      languages: "English",
      availability: "Mon-Fri, 8AM-5PM",
      location: "Northside Cancer Center"
    }
  },
  {
    user: {
      firstname: "Maria",
      lastname: "Garcia",
      email: "maria.garcia@medifi.com",
      password: "password123",
      age: 36,
      gender: "female",
      mobile: 5557890123,
      address: "147 Care Circle, Southside",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Psychiatry",
      experience: 11,
      fees: 160,
      languages: "English, Spanish",
      availability: "Mon-Thu, 9AM-5PM",
      location: "Southside Mental Health Clinic"
    }
  },
  {
    user: {
      firstname: "Robert",
      lastname: "Brown",
      email: "robert.brown@medifi.com",
      password: "password123",
      age: 48,
      gender: "male",
      mobile: 5558901234,
      address: "258 Medical Lane, Central",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Gastroenterology",
      experience: 16,
      fees: 190,
      languages: "English",
      availability: "Mon-Fri, 8AM-4PM",
      location: "Central Digestive Health"
    }
  },
  {
    user: {
      firstname: "Jennifer",
      lastname: "Davis",
      email: "jennifer.davis@medifi.com",
      password: "password123",
      age: 39,
      gender: "female",
      mobile: 5559012345,
      address: "369 Wellness Rd, Downtown",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Endocrinology",
      experience: 13,
      fees: 170,
      languages: "English, French",
      availability: "Mon-Wed, Fri, 9AM-5PM",
      location: "Downtown Endocrine Center"
    }
  },
  {
    user: {
      firstname: "Christopher",
      lastname: "Miller",
      email: "christopher.miller@medifi.com",
      password: "password123",
      age: 44,
      gender: "male",
      mobile: 5550123456,
      address: "741 Health Ave, Midtown",
      status: "approved",
      pic: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
    },
    doctor: {
      specialization: "Rheumatology",
      experience: 14,
      fees: 175,
      languages: "English",
      availability: "Tue-Fri, 8AM-4PM",
      location: "Midtown Rheumatology Clinic"
    }
  }
];

const seedDoctors = async () => {
  try {
    console.log("Starting to seed doctors in Firebase...");
    
    for (const doctorData of sampleDoctors) {
      // Check if user already exists
      const usersRef = db.collection('users');
      const userQuery = await usersRef.where('email', '==', doctorData.user.email).get();
      
      if (!userQuery.empty) {
        console.log(`User ${doctorData.user.email} already exists, skipping...`);
        continue;
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(doctorData.user.password, 10);
      
      // Create user document
      const userDoc = {
        ...doctorData.user,
        password: hashedPassword,
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const userRef = await usersRef.add(userDoc);
      console.log(`Created user: ${doctorData.user.firstname} ${doctorData.user.lastname}`);
      
      // Create doctor document
      const doctorDoc = {
        userId: userRef.id,
        ...doctorData.doctor,
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const doctorsRef = db.collection('doctors');
      await doctorsRef.add(doctorDoc);
      console.log(`Created doctor profile for: ${doctorData.user.firstname} ${doctorData.user.lastname}`);
    }
    
    console.log("Doctor seeding completed successfully!");
    console.log(`Total doctors created: ${sampleDoctors.length}`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding doctors:", error);
    process.exit(1);
  }
};

seedDoctors(); 