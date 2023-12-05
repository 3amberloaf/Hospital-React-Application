import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/ambersautner/patient-management/src/components.css'; // Your CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Hospital Database</div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/searchpage">Search</Link>
          </li>
          <li>
            <Link to="/AddPatient">Add Patient</Link>
          </li>
          <li>
            <Link to="/scheduleappointments">Schedule Appointments</Link>
          </li>
          <li>
            <Link to="/schedule">Doctor Schedule</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
