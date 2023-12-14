import React, { useState } from 'react';
import '../staff.css';
import '../patient.css';
import Calendar from 'react-calendar'; // Assuming you're using react-calendar
import 'react-calendar/dist/Calendar.css'; // Default styling for react-calendar

function ScheduleJobShifts() {
  const [date, setDate] = useState(new Date()); // State for calendar date
  const [employeeId, setEmployeeId] = useState(''); // State for employee ID
  const [notes, setNotes] = useState(''); // State for notes

  // Handler for calendar date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleScheduleClick = () => {
    console.log("Scheduling with:", { date, employeeId, notes });
    // Add logic for what should happen when the schedule button is clicked
  };

  return (
    <div className="calendar-container">
      <h2>Schedule Job Shifts</h2>

      {/* Calendar component */}
      <Calendar onChange={handleDateChange} value={date} /> {/* Corrected this line */}

      <div className="input-textarea-container">
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter Employee ID"
        />
      </div>

      <div className="schedule-button-container">
        <button onClick={handleScheduleClick} className="schedule-button">Schedule</button>
      </div>
    </div>
  );
}

export default ScheduleJobShifts;
