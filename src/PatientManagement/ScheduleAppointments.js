import React, { useState } from 'react';
import '../patient.css'; 
import { scheduleConsultation } from '../Api/EmployeeService'; // assuming getPatientById is exported from here
import { getPatientById } from '../Api/PatientService'; // assuming getPatientById is exported from here

const ScheduleAppointment = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    patient_id: '',
    physician_id: '',
    date: '',
    notes: '',
    type: '', 
  });

const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setIsSuccess(false);

    // Check if the changed field is patient_id and fetch patient details
    if (name === 'patient_id' && value) {
      try {
        const patientData = await getPatientById(value);
        // Update the state with fetched patient data
        setAppointmentDetails(prevDetails => ({
          ...prevDetails,
          patient_id: value,
          patient_name: patientData.name, // example, adjust according to actual data structure
          // other fields if necessary
        }));
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    } else {
      setAppointmentDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);
    try {
      const response = await scheduleConsultation(appointmentDetails);
      setIsSuccess(true);
      console.log('Appointment scheduled:', response);
    } catch (error) {
      console.error('Error scheduling appointment:', error);
    }
  };

  return (
    <div className="add-patient-form">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient's Name:</label>
          <input 
            id="patient_id" 
            name="patient_id" 
            type="text" 
            value={appointmentDetails.patient_id} 
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
            placeholder="Enter Phone Number"
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

        <button type="submit">Schedule</button>
        {isSuccess && <div className="success-message">Appointment successfully scheduled!</div>}
      </form>
    </div>
  );
}

export default ScheduleAppointment;
