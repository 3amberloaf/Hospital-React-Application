import React from 'react';
import { Link } from 'react-router-dom';
import '../patient.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Newark Medical Associates</div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/patientdashboard">Patient Management</Link>
          </li>
          <li>
            <Link to="/inpatientdashboard">In-Patient Management</Link>
          </li>
          <li>
            <Link to="/medicalstaffdashboard">Medical Staff Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
