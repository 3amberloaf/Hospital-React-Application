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
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/AddPatient">Add Patient</Link>
          </li>
          <li>
            <Link to="/SearchPage">Search</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
