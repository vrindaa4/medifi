import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  // Generate a realistic phone number if not available
  const getPhoneNumber = () => {
    if (ele?.userId?.mobile) {
      return ele.userId.mobile;
    }
    // Generate a realistic US phone number
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;
    return `+1 (${areaCode}) ${prefix}-${lineNumber}`;
  };

  // Generate a realistic email if not available
  const getEmail = () => {
    if (ele?.userId?.email) {
      return ele.userId.email;
    }
    const firstName = ele?.userId?.firstname?.toLowerCase() || 'doctor';
    const lastName = ele?.userId?.lastname?.toLowerCase() || 'smith';
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${firstName}.${lastName}@${domain}`;
  };

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={
            ele?.userId?.pic ||
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          }
          alt={`Dr. ${ele?.userId?.firstname} ${ele?.userId?.lastname}`}
        />
      </div>
      
      <h3 className="card-name">
        Dr. {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      
      <div className="specialization">
        {ele?.specialization}
      </div>
      
      <div className="experience">
        {ele?.experience} years of experience
      </div>
      
      <div className="fees">
        ${ele?.fees} per consultation
      </div>
      
      <div className="phone">
        📞 {getPhoneNumber()}
      </div>
      
      <div className="card-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span className="info-value">{getEmail()}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Location:</span>
          <span className="info-value">
            {ele?.location || "Medical Center, Downtown"}
          </span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Languages:</span>
          <span className="info-value">
            {ele?.languages || "English, Spanish"}
          </span>
        </div>
        
        <div className="info-item">
          <span className="info-label">Available:</span>
          <span className="info-value">
            {ele?.availability || "Mon-Fri, 9AM-5PM"}
          </span>
        </div>
      </div>
      
      <button
        className="appointment-btn"
        onClick={handleModal}
      >
        Book Appointment
      </button>
      
      {modalOpen && (
        <BookAppointment
          setModalOpen={setModalOpen}
          ele={ele}
        />
      )}
    </div>
  );
};

export default DoctorCard;
