import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBed, FaUserMd, FaUserNurse, FaCalendarCheck, FaBookMedical } from 'react-icons/fa'; // Example new icons
import '../inpatient.css'
function InPatientDashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h2> In-Patient Management</h2>
      <div className="dashboard-links">
        <div className="dashboard-item" onClick={() => navigateTo('/checkroom')}>
          <FaBed />
          <p>Check for Available Room/Bed</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/assignroom')}>
          <FaBed />
          <p>Assign/Remove a Patient to a Room/Bed</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/assigndoctor')}>
          <FaUserMd />
          <p>Assign/Remove a Doctor to a Patient</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/assignnurse')}>
          <FaUserNurse />
          <p>Assign/Remove a Nurse to a Patient</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/viewsurgeryscheduleroom')}>
          <FaCalendarCheck />
          <p>View Scheduled Surgery per Room and per Day</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/viewsurgerybysurgeon')}>
          <FaUserMd />
          <p>View Scheduled Surgery per Surgeon and per Day</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/booksurgery')}>
          <FaBookMedical />
          <p>Book a Surgery</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/viewsurgerybypatient')}>
          <FaCalendarCheck />
          <p>View Scheduled Surgery per Patient</p>
        </div>
      </div>
    </div>
  );
}

export default InPatientDashboard;
