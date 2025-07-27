import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { fetchData } from "../helper/apiCall";
import DoctorCard from "../components/DoctorCard";
import Navbar from "../components/Navbar";
import { mockDoctors } from "../data/mockDoctors";
import "../styles/doctors.css";

const Doctors = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");

  const getDoctors = async () => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData("/doctor/getalldoctors");
      setDoctors(temp);
      setFilteredDoctors(temp);
      dispatch(setLoading(false));
    } catch (error) {
      console.log("Using mock data for doctors");
      setDoctors(mockDoctors);
      setFilteredDoctors(mockDoctors);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getDoctors();
  }, [dispatch]);

  // Filter doctors based on search term and specialization
  useEffect(() => {
    let filtered = doctors;
    
    if (searchTerm) {
      filtered = filtered.filter(doctor => 
        doctor.userId.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.userId.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (specializationFilter) {
      filtered = filtered.filter(doctor => 
        doctor.specialization === specializationFilter
      );
    }
    
    setFilteredDoctors(filtered);
  }, [searchTerm, specializationFilter, doctors]);

  // Get unique specializations for filter dropdown
  const specializations = [...new Set(doctors.map(doctor => doctor.specialization))];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <section className="doctors-section">
            <div className="container">
              <h2 className="page-heading">Our Expert Doctors</h2>
              
              {/* Search and Filter Section */}
              <div className="search-filter-container">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search doctors by name or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                
                <div className="filter-box">
                  <select
                    value={specializationFilter}
                    onChange={(e) => setSpecializationFilter(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Specializations</option>
                    {specializations.map((spec, index) => (
                      <option key={index} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredDoctors.length > 0 ? (
                <div className="doctors-container">
                  {filteredDoctors.map((ele, i) => {
                    return <DoctorCard ele={ele} key={i} />;
                  })}
                </div>
              ) : (
                <div className="no-results">
                  <h3>No doctors found</h3>
                  <p>Try adjusting your search criteria or filters.</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Doctors;
