// ScheduleAppointment.js
import React, { useState } from 'react';

function ScheduleAppointment({ addAppointment }) {
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientName: '',
    doctorName: '',
    date: ''
  });

  const handleChange = (e) => {
    setAppointmentDetails({
      ...appointmentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(appointmentDetails);
    setAppointmentDetails({ patientName: '', doctorName: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="patientName"
        value={appointmentDetails.patientName}
        onChange={handleChange}
        placeholder="Patient's Name"
      />
      <input
        name="doctorName"
        value={appointmentDetails.doctorName}
        onChange={handleChange}
        placeholder="Doctor's Name"
      />
      <input
        name="date"
        type="date"
        value={appointmentDetails.date}
        onChange={handleChange}
      />
      <button type="submit">Schedule</button>
    </form>
  );
}

export default ScheduleAppointment;
