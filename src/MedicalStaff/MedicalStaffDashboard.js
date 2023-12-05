import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaUserFriends, FaCalendarAlt } from 'react-icons/fa'; // Icons for staff management
import '../staff.css'; // Ensure you have this CSS file for styling

function MedicalStaffDashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h2>Medical Staff Management</h2>
      <div className="dashboard-links">
        <div className="dashboard-item" onClick={() => navigateTo('/addremovestaff')}>
          <FaUserPlus />
          <p>Add/Remove a Staff Member</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/viewstaff')}>
          <FaUserFriends />
          <p>View Staff Member per Job Type</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/schedulejobshift')}>
          <FaCalendarAlt />
          <p>Schedule Job Shift</p>
        </div>
      </div>
    </div>
  );
}

export default MedicalStaffDashboard;
