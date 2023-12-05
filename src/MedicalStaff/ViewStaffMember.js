import React, { useState, useEffect } from 'react';
import { FaStethoscope, FaUserNurse, FaClipboardList } from 'react-icons/fa'; // Icons for different job types
import '../staff.css'; // Ensure you have this CSS file for styling

function ViewStaffByJobType() {
  const [staff, setStaff] = useState([
    { jobType: 'Doctors', members: ['Dr. Smith', 'Dr. Johnson'] },
    { jobType: 'Nurses', members: ['Nurse Kate', 'Nurse Bob'] },
    { jobType: 'Administrative', members: ['Admin Steve', 'Admin Linda'] },
    // ... other job types and members ...
  ]);

  useEffect(() => {
    // Fetch staff data from a backend or other source
    // setStaff(fetchedData);
  }, []);

  // Icon selector based on job type
  const getIcon = (jobType) => {
    switch (jobType) {
      case 'Doctors': return <FaStethoscope />;
      case 'Nurses': return <FaUserNurse />;
      case 'Administrative': return <FaClipboardList />;
      default: return <FaClipboardList />;
    }
  };

  return (
    <div className="view-staff-container">
      <h2>View Staff Members by Job Type</h2>
      {staff.map((item, index) => (
        <div key={index} className="staff-type">
          <h3>{getIcon(item.jobType)} {item.jobType}</h3>
          <ul>
            {item.members.map((member, idx) => (
              <li key={idx}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ViewStaffByJobType;
