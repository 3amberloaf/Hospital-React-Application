import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { scheduleConsultation } from '../Api/EmployeeService';

function ScheduleJobShifts() {
  const [date, setDate] = useState(new Date());
  const [physicianId, setPhysicianId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleScheduleClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (isNaN(physicianId) || physicianId === '') {
      setError('Physician ID must be a number and cannot be empty.');
      return;
    }
  
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  
    const newConsultation = {
      date: formattedDate,
      physicianId: Number(physicianId), // Changed from physician_id to physicianId
      type: null,  // Optional
      notes: null, // Optional
      patient_id: null, // Optional
    };
  

    setLoading(true);

    try {
      const response = await scheduleConsultation(newConsultation);
      if (response.success) {
        setError('');
        setPhysicianId('');
      } else {
        setError('Scheduling failed: ' + response.message);
      }
    } catch (err) {
      console.error('Error in scheduling consultation:', err);
      setError('Failed to schedule the consultation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="calendar-container" onSubmit={handleScheduleClick}>
      <h2>Schedule Job Shifts</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <div className="input-textarea-container">
        <label htmlFor="physician_id">Physician ID:</label>
        <input
          type="text"
          id="physician_id"
          value={physicianId}
          onChange={(e) => setPhysicianId(e.target.value)}
          placeholder="Enter Physician ID"
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="schedule-button-container">
          <button type="submit" className="schedule-button">
            Schedule
          </button>
        </div>
      )}
    </form>
  );
}

export default ScheduleJobShifts;
