import React from "react";
import image from "../images/aboutimg.jpg";
import { FiTarget, FiEye, FiHeart, FiCheckCircle } from "react-icons/fi";
import "../styles/about.css";

const AboutUs = () => {
  const values = [
    {
      icon: <FiTarget />,
      title: "Our Mission",
      description: "To democratize healthcare access through technology, connecting patients with qualified medical professionals seamlessly."
    },
    {
      icon: <FiEye />,
      title: "Our Vision", 
      description: "A world where quality healthcare is just a click away, available to everyone regardless of location or time constraints."
    },
    {
      icon: <FiHeart />,
      title: "Our Values",
      description: "Trust, transparency, and patient-centric care form the foundation of everything we do."
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="about-badge">
            <span>About Medifi</span>
          </div>
          <h2>Revolutionizing Healthcare Access</h2>
          <p>
            Medifi is a comprehensive healthcare platform designed to bridge the gap between 
            patients and healthcare providers. Our mission is to make quality healthcare 
            accessible, convenient, and efficient for everyone.
          </p>
        </div>

        <div className="about-content">
          <div className="about-visual">
            <div className="about-image-container">
              <img src={image} alt="Healthcare professionals" />
              <div className="about-stats">
                <div className="about-stat">
                  <FiCheckCircle />
                  <span>Trusted by 10,000+ patients</span>
                </div>
                <div className="about-stat">
                  <FiCheckCircle />
                  <span>500+ verified doctors</span>
                </div>
                <div className="about-stat">
                  <FiCheckCircle />
                  <span>24/7 support available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <div className="value-content">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="about-cta">
              <button className="btn btn-primary">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
