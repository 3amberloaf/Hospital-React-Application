import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default style for the calendar

// Mock data for doctors' schedules
const doctorsSchedule = {
  '2023-12-05': ['Dr. Smith', 'Dr. Johnson'],
  '2023-12-06': ['Dr. Williams', 'Dr. Brown'],
  // Add more dates and doctors as needed
};

function DoctorsSchedule() {
  const [date, setDate] = useState(new Date());
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Update the doctors list based on the selected date
    const selectedDate = date.toISOString().split('T')[0];
    setDoctors(doctorsSchedule[selectedDate] || []);
  }, [date]);

  return (
    <div className="calendar-container">
      <h2>NWA Doctor Schedule</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <h3>Doctors working on {date.toDateString()}:</h3>
      <ul>
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => <li key={index}>{doctor}</li>)
        ) : (
          <li>No doctors available on this day.</li>
        )}
      </ul>
    </div>
  );
}

export default DoctorsSchedule;
