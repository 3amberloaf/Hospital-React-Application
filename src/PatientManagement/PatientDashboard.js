import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaInfoCircle, FaCalendarAlt, FaStethoscope } from 'react-icons/fa'; // Example icons

function PatientDashboard() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="dashboard" >
      <h2>Patient Management</h2>
      </div>
      <div className="dashboard-links">
        <div className="dashboard-item" onClick={() => navigateTo('/addpatient')}>
          <FaUserPlus />
          <p>Insert New Patient</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/viewpatient')}>
          <FaInfoCircle />
          <p>View Patient Information</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/scheduleappointments')}>
          <FaCalendarAlt />
          <p>Schedule Appointments</p>
        </div>
        <div className="dashboard-item" onClick={() => navigateTo('/doctorschedule')}>
          <FaStethoscope />
          <p>View Doctors Schedule</p>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
