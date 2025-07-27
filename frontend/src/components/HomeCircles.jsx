import React from "react";
import "../styles/homecircles.css";
import { 
  FiHeart, 
  FiActivity, 
  FiCpu, 
  FiZap, 
  FiTrendingUp, 
  FiDroplet,
  FiArrowRight 
} from "react-icons/fi";

const HomeCircles = () => {
  const specialties = [
    {
      id: 1,
      name: "Cardiac Care",
      icon: <FiHeart />,
      description: "Expert heart care and cardiovascular treatments",
      color: "#ef4444"
    },
    {
      id: 2,
      name: "Cancer Care",
      icon: <FiActivity />,
      description: "Comprehensive oncology and cancer treatment",
      color: "#8b5cf6"
    },
    {
      id: 3,
      name: "Neurosciences",
      icon: <FiCpu />,
      description: "Advanced neurological care and treatments",
      color: "#06b6d4"
    },
    {
      id: 4,
      name: "Gastrosciences",
      icon: <FiZap />,
      description: "Digestive health and gastrointestinal care",
      color: "#f59e0b"
    },
    {
      id: 5,
      name: "Orthopaedics",
      icon: <FiTrendingUp />,
      description: "Bone and joint care with modern techniques",
      color: "#10b981"
    },
    {
      id: 6,
      name: "Renal Care",
      icon: <FiDroplet />,
      description: "Kidney health and renal system treatments",
      color: "#3b82f6"
    }
  ];

  return (
    <section className="specialties-section">
      <div className="specialties-container">
        <div className="specialties-header">
          <div className="specialties-badge">
            <span>Medical Specialties</span>
          </div>
          <h2>An Ecosystem for Clinical Excellence</h2>
          <p>
            Access world-class healthcare across multiple specialties with our network 
            of experienced and board-certified medical professionals.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="specialty-card">
              <div className="specialty-icon" style={{ backgroundColor: specialty.color }}>
                {specialty.icon}
              </div>
              <div className="specialty-content">
                <h3>{specialty.name}</h3>
                <p>{specialty.description}</p>
                <button className="specialty-btn">
                  Learn More
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="specialties-cta">
          <button className="btn btn-primary">
            View All Specialties
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCircles;
