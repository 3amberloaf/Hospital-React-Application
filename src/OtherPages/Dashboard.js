import React from 'react';
import { useNavigate } from 'react-router-dom';
import patientImage from '../assets/images/patient.jpg'; // path to the patient photo
import inpatientImage from '../assets/images/inpatient.jpg'; // path to the inpatient photo
import staffImage from '../assets/images/medical.jpg'; // path to the medical staff photo
import '../App.css'; // importing CSS to style  dashboard
import InfoContainer from './InfoContainer';


function Dashboard() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle navigation
  const navigateTo = (path) => {
    navigate(path); // Navigates to the given path
  };

  // Creates the dashboard
  return (
    <div> {/* Main container for the dashboard */}
      <div className="welcome">
        <p>Welcome to Newark Medical Associates</p> {/* Welcome message */}
      </div>

      <div className="dashboard"> {/* Container for dashboard items */}
        {/* Dashboard item for patient management */}
        <div className="dashboard-item" onClick={() => navigateTo('/patientdashboard')}>
          <img src={patientImage} alt="Patient Management" />
          <p>Patient Management</p>
        </div>

        {/* Dashboard item for in-patient management */}
        <div className="dashboard-item" onClick={() => navigateTo('/inpatientdashboard')}>
          <img src={inpatientImage} alt="In-patient Management" />
          <p>In-Patient Management</p>
        </div>

        {/* Dashboard item for medical staff management */}
        <div className="dashboard-item" onClick={() => navigateTo('/medicalstaffdashboard')}>
          <img src={staffImage} alt="Medical Staff Management" />
          <p>Medical Staff Management</p>
        </div>
        
      </div>
      <InfoContainer /> {/* Contact and visiting info */}
    </div>
  ); 
}

export default Dashboard; // Exporting the Dashboard component
