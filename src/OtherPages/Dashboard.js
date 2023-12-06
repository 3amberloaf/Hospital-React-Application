import React from 'react';
import { useNavigate } from 'react-router-dom';
import patientImage from '../assets/images/patient.jpg';
import inpatientImage from '../assets/images/inpatient.jpg';
import staffImage from '../assets/images/medical.jpg';
import { FaUser, FaProcedures, FaUserMd } from 'react-icons/fa'; 
import '../dashboard.css'
import InfoContainer from './InfoContainer';

function Dashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const DashboardItem = ({ navigateTo, path, imgSrc, altText, Icon, text }) => (
    <div className="dashboard-item" onClick={() => navigateTo(path)}>
      <img src={imgSrc} alt={altText} />
      {Icon && <Icon className="icon" />} {/* Conditionally render icon if provided */}
      <p>{text}</p>
    </div>
  );

  return (
    <div>
      <div className="welcome">
        <p>Welcome to Newark Medical Associates</p>
      </div>

      <div className="dashboard">
        <DashboardItem navigateTo={navigateTo} path='/patientdashboard' imgSrc={patientImage} altText="Patient Management" Icon={FaUser} text="Patient Management" />
        <DashboardItem navigateTo={navigateTo} path='/inpatientdashboard' imgSrc={inpatientImage} altText="In-patient Management" Icon={FaProcedures} text="In-Patient Management" />
        <DashboardItem navigateTo={navigateTo} path='/medicalstaffdashboard' imgSrc={staffImage} altText="Medical Staff Management" Icon={FaUserMd} text="Medical Staff Management" />
      </div>
      
      <InfoContainer />
    </div>
  );
}

export default Dashboard;
