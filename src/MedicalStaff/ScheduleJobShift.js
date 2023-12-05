import React from 'react';
import { FaCalendarAlt, FaUserNurse, FaUserMd, FaClock } from 'react-icons/fa'; // Icons for scheduling
import '../staff.css'; // Ensure you have this CSS file for styling

function ScheduleJobShifts() {
  return (
    <div className="schedule-job-shifts-container">
      <h2>Schedule Job Shifts</h2>
      <div className="job-shifts-links">
        <div className="job-shift-item">
          <FaUserNurse />
          <p>Schedule Nurse Shifts</p>
        </div>
        <div className="job-shift-item">
          <FaUserMd />
          <p>Schedule Doctor Shifts</p>
        </div>
        <div className="job-shift-item">
          <FaCalendarAlt />
          <p>View Weekly Schedule</p>
        </div>
        <div className="job-shift-item">
          <FaClock />
          <p>Manage Shift Hours</p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleJobShifts;
