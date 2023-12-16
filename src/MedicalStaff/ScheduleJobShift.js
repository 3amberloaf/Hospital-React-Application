import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { scheduleNurseShifts } from '../Api/EmployeeService';
import '../staff.css'; 

function ScheduleJobShifts() {
  const [shiftData, setShiftData] = useState({
    shift_date: new Date(), // Initialize with current date
    employee_id: '',
  });
  const [isSuccess, setIsSuccess] = useState(false); // New state for success message

  const handleDateChange = (newDate) => {
    setShiftData(prevData => ({ ...prevData, shift_date: newDate }));
    setIsSuccess(false); // Reset success message when date changes
  };

  const handleChange = (e) => {
    setShiftData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    setIsSuccess(false); // Reset success message when input changes
  };

  const handleScheduleClick = async (e) => {
    e.preventDefault();
    setIsSuccess(false); // Reset success message before new submission
    try {
      const formattedDate = shiftData.shift_date.toISOString().split('T')[0];
      const employeeIdAsNumber = Number(shiftData.employee_id);

      if (isNaN(employeeIdAsNumber)) {
        console.error('Invalid Nurse ID');
        return;
      }

      const nurseToUpdate = {
        id: employeeIdAsNumber,
        shift_date: formattedDate,
      };

      const response = await scheduleNurseShifts(nurseToUpdate);
      console.log('Shift added:', response);
      setIsSuccess(true); // Set success message to true on successful update
    } catch (error) {
      console.error('Error scheduling shift:', error);
      console.error(error.stack);
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
      {isSuccess && <div className="success-message">Shift successfully scheduled!</div>}
    </form>
  );
}

export default ScheduleJobShifts;
