import React, { useState } from 'react';
import '../components.css'; // Assuming this path is correct

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
    <div className="add-patient-form">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient's Name:</label>
          <input 
            id="patientName" 
            name="patientName" 
            type="text" 
            value={appointmentDetails.patientName} 
            onChange={handleChange} 
            placeholder="Patient's Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="doctorName">Doctor's Name:</label>
          <input 
            id="doctorName" 
            name="doctorName" 
            type="text" 
            value={appointmentDetails.doctorName} 
            onChange={handleChange} 
            placeholder="Doctor's Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input 
            id="date" 
            name="date" 
            type="date" 
            value={appointmentDetails.date} 
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Phone Number:</label>
          <input 
            id="phone" 
            name="phone" 
            type="digits" 
            value={appointmentDetails.phone} 
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Reason for Visit:</label>
          <input 
            id="reason" 
            name="reason" 
            type="text" 
            value={appointmentDetails.reason} 
            onChange={handleChange} 
            placeholder="Please explain in 200 words or less."
          />
        </div>

        <button type="submit">Check Availability</button>
      </form>
    </div>
  );
}

export default ScheduleAppointment;
