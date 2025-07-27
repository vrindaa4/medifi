import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";
import { FiCalendar, FiUser, FiShield, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🏥 Trusted Healthcare Platform</span>
          </div>
          <h1>
            Second Opinion Is Important
            <br />
            <span className="text-primary">More Ways Than One</span>
          </h1>
          <p className="hero-description">
            Connect with verified healthcare professionals instantly. Get expert second opinions, 
            book appointments, and manage your health journey with confidence. 
            Experience healthcare reimagined for the digital age.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">
              Book Appointment
              <FiArrowRight />
            </button>
            <button className="btn btn-secondary">
              Get Second Opinion
            </button>
          </div>

          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">
                <FiUser />
              </div>
              <div className="feature-content">
                <h4>Verified Doctors</h4>
                <p>Board-certified specialists</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FiCalendar />
              </div>
              <div className="feature-content">
                <h4>Instant Booking</h4>
                <p>24/7 appointment scheduling</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FiShield />
              </div>
              <div className="feature-content">
                <h4>Secure & Private</h4>
                <p>HIPAA compliant platform</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={image} alt="Healthcare professionals" />
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Doctors</span>
              </div>
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Patients</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Specialties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
