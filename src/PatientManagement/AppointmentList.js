// AppointmentList.js
import React from 'react';

function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>Appointment List</h2>
      {appointments.map((appointment, index) => (
        <div key={index}>
          <p>Patient: {appointment.patientName}</p>
          <p>Doctor: {appointment.doctorName}</p>
          <p>Date: {appointment.date}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
