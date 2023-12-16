import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { scheduleNurseShifts } from '../Api/EmployeeService';

function ScheduleJobShifts() {
  const [shiftData, setShiftData] = useState({
    shift_date: new Date(), // Initialize with current date
    employee_id: '',
  });

  const handleDateChange = (newDate) => {
    setShiftData(prevData => ({ ...prevData, shift_date: newDate }));
  };

  const handleChange = (e) => {
    setShiftData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleScheduleClick = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = shiftData.shift_date.toISOString().split('T')[0]; // Formatting date to YYYY-MM-DD
      const employeeIdAsNumber = Number(shiftData.employee_id); // Convert employee_id to number
  
      // Check if employeeIdAsNumber is a valid number
      if (isNaN(employeeIdAsNumber)) {
        console.error('Invalid employee ID');
        return;
      }
  
      // Updated function call with separate arguments
      const response = await scheduleNurseShifts(employeeIdAsNumber, formattedDate);
      console.log('Shift added:', response);
    } catch (error) {
      console.error('Error scheduling shift:', error);
    }
  };

  return (
    <form className="calendar-container" onSubmit={handleScheduleClick}>
      <h2>Schedule Job Shifts</h2>
      <Calendar onChange={handleDateChange} value={shiftData.shift_date} />
      
      <div className="form-group">
        <label htmlFor="employee_id">Nurse ID:</label>
        <input
          type="text"
          id="employee_id"
          name="employee_id"
          value={shiftData.employee_id}
          onChange={handleChange}
          placeholder="Enter Nurse ID"
        />
      </div>

      <button type="submit" className="submit-button">Schedule</button>
    </form>
  );
}

export default ScheduleJobShifts;
