import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';
import addRemoveStaffImg from '../assets/images/change.jpg'; 
import viewStaffImg from '../assets/images/viewstaff.jpg'; 
import scheduleJobShiftImg from '../assets/images/shift.jpg'; 
import '../dashboard.css';
import InfoContainer from '../OtherPages/InfoContainer';

function MedicalStaffDashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const DashboardItem = ({ navigateTo, path, imgSrc, altText, Icon, text }) => (
    <div className="dashboard-item" onClick={() => navigateTo(path)}>
      <img src={imgSrc} alt={altText} />
      {Icon && <Icon className="icon" />}
      <p>{text}</p>
    </div>
  );

  return (
    <div>
      <div className="welcome">
        <h2>Medical Staff Management Portal</h2>

        <div className="dashboard">
          <DashboardItem navigateTo={navigateTo} path='/addremovestaff' imgSrc={addRemoveStaffImg} altText="Add/Remove Staff" Icon={FaUserPlus} text="Add/Remove a Staff Member" />
          <DashboardItem navigateTo={navigateTo} path='/viewstaff' imgSrc={viewStaffImg} altText="View Staff" Icon={FaUserFriends} text="View Staff Member per Job Type" />
          <DashboardItem navigateTo={navigateTo} path='/schedulejobshift' imgSrc={scheduleJobShiftImg} altText="Schedule Job Shift" Icon={FaCalendarAlt} text="Schedule Job Shift" />
        </div>
      </div>
      <InfoContainer />
    </div>
  );
}

export default MedicalStaffDashboard;
