import React from 'react';
import { useNavigate } from 'react-router-dom';
import patientImage from '../assets/images/patient.jpg'; // Update with actual file name
import inpatientImage from '../assets/images/inpatient.jpg'; // Update with actual file name
import staffImage from '../assets/images/medical.jpg'; // Update with actual file name
import '../App.css'; // Assuming this path is correct

function Dashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="welcome">
        <p>Welcome to Newark Medical Associates</p>
      </div>
      <div className="dashboard">
      <div className="dashboard-item" onClick={() => navigateTo('/patientdashboard')}>
          <img src={patientImage} alt="Patient Management" />
          <p>Patient Management</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/inpatient-management')}>
          <img src={inpatientImage} alt="In-patient Management" />
          <p>Inpatient Management</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/staff-management')}>
          <img src={staffImage} alt="Medical Staff Management" />
          <p>Medical Staff Management</p>
        </div>
      </div>
    </div>
  ); 
}

export default Dashboard;
